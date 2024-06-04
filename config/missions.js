import {
    DockerImage,
    NestJsImage,
    NextJsImage,
    ResellSpotterImage,
    SteCroixImage,
    TailwindCssImage,
    WebenlaImage
} from "@/config/content";


export const ResellSpotterIntroduction = `As a co-founder of Tiktools, a SaaS platform for social media content automation, I designed a scalable microservices system, developed a video transition effects library, and integrated AI for image, audio, and text processing.`;

export const ResellSpotterDescription = `As a co-founder of Tiktools, a SaaS platform for social media content automation, I designed a scalable microservices system, developed a video transition effects library, and integrated AI for image, audio, and text processing.`;

export const ResellSpotterMission = {
    name: `ResellSpotter`,
    date: "From December 2015 to June 2018",
    description: "Application to buy Vinted items first",
    introduction: ResellSpotterIntroduction,

    more: {
        description: ResellSpotterDescription,
    },
    img: ResellSpotterImage,
    link: 'https://www.resellspotter.com/',
};



export const WebenlaIntroduction = `As a co-founder of Tiktools, a SaaS platform for social media content automation, I designed a scalable microservices system, developed a video transition effects library, and integrated AI for image, audio, and text processing.`;

export const WebenlaDescription = `As a co-founder of Tiktools, a SaaS platform for social media content automation, I designed a scalable microservices system, developed a video transition effects library, and integrated AI for image, audio, and text processing.`;

export const WebenlaMission = {
    name: `Webenla`,
    date: "From June 2022 to September 2024",
    description: "Software that helps you to learn",
    introduction: WebenlaIntroduction,

    more: {
        description: WebenlaDescription,
        stacks:[
            ["Docker", DockerImage],
        ]
    },
    img: WebenlaImage,
    link: 'https://staging.webenla.academy/',
};





export const MissionsConfig = [
    WebenlaMission,
    ResellSpotterMission
]
