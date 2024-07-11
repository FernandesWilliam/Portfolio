# ------------------------------------------- BASE ------------------------------------------- #
FROM node:20.15.1-bullseye-slim as base
RUN apt-get update && apt-get install -y apt-transport-https ca-certificates curl gnupg && \
    curl -sLf --retry 3 --tlsv1.2 --proto "=https" 'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' | gpg --dearmor -o /usr/share/keyrings/doppler-archive-keyring.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/doppler-archive-keyring.gpg] https://packages.doppler.com/public/cli/deb/debian any-version main" | tee /etc/apt/sources.list.d/doppler-cli.list && \
    apt-get update && \
    apt-get -y install doppler

# ------------------------------------------- DEV ------------------------------------------- #
FROM base as dev
# ------------------------------------------- BUILD ------------------------------------------- #
FROM base as build
COPY . /client/
WORKDIR /client
RUN npm install --production
RUN npm run build



# ------------------------------------------- STAGING ------------------------------------------- #
FROM base as staging
COPY --from=build /client/out /client/out
COPY --from=build /client/package.json /client/package.json
WORKDIR /client/

# ------------------------------------------- PROD ------------------------------------------- #
FROM base as prod
COPY --from=build /client/out /client/out
COPY --from=build /client/package.json /client/package.json
WORKDIR /client/