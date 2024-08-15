/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        unoptimized: true,
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.node/,
            use: 'node-loader'
        });

        return config;
    },
};

export default nextConfig;
