import {
    DockerImage,
    KopeurImage, LearnzImage,
    NestJsImage,
    NextJsImage, PandaCssImage, PythonImage, RustImage,
    TailwindCssImage,
    TiktoolsImage,
    TradingBotImage
} from "@/config/content";



export const TiktoolsIntroduction = `I am one of the co-founders of TikTools, a platform that enables the automatic creation of content for social networks, specializing in the TikTok media. My role in the company has been to manage all aspects of design and implementation of the architecture.`;

export const TiktoolsDescription = `My role has been to design the project architecture, implement a microservices system to horizontally scale video generation, create a library for adding transition effects to videos, develop project functionalities, build a personalized onboarding system for users, handle video manipulation via FFmpeg, create a Discord bot, work with local and API-based AI manipulation, and set up a reverse proxy.`;

export const TiktoolsProject = {
    name: `Tiktools`,
    date: "From December 2023 to June 2024",
    description: "Tool that automate content creation",
    introduction: TiktoolsIntroduction,

    more: {
        description: TiktoolsDescription,
        stacks: [
            ["Next Js", NextJsImage],
            ["Docker", DockerImage],
            ["Nest Js", NestJsImage],
            ["Panda Css", PandaCssImage],
            ["Python", PythonImage],
        ],
    },
    img: TiktoolsImage,
    link: 'https://staging.tiktools.com',

};


export const KopeurDescription = `In this company, my role encompassed designing and implementing the project's architecture, setting up environment pipelines for server deployment, implementing a reverse proxy and DNS routing via a DNS challenge, optimizing aggregation and searching for new Vinted articles, developing an efficient algorithm to retrieve Vinted articles with a latency of less than 300 ms, establishing a server-side rendering system for delivering articles to users, and implementing an in-house end-to-end testing system.`;
export const KopeurIntroduction = `I am one of the co-founders of Kopeur, a company that has now closed down. We enabled the retrieval of all new items from Vinted before Vinted published them on its news feed.`;

export const KopeurProject = {
    name: `Kopeur`,
    date: "From October 2022 to May 2023",
    description: "Application to buy Vinted items first",
    introduction: KopeurIntroduction,
    more: {
        description: KopeurDescription,
        stacks: [
            ["Next Js", NextJsImage],
            ["Docker", DockerImage],
            ["Rust", RustImage],
            ["Nest Js", NestJsImage],
            ["Tailwindcss", TailwindCssImage],
        ]
    },
    img: KopeurImage,
    link: 'https://www.tiktok.com/@kopeur_',

};


export const TradingBotDescription = ``;
export const TradingBotIntroduction = ``;

export const TradingBotProject = {
    name: `Trading Bot`,
    date: "From February 2022 to November 2022",
    description: "Application to buy Vinted items first",
    introduction: TiktoolsIntroduction,
    more: {
        description: TiktoolsDescription,
        stacks: [
            ["Next JS", NextJsImage],
        ],
    },
    img: TradingBotImage,

};


export const LearnzDescription = ``;
export const LearnzIntroduction = ``;

export const LearnzProject = {
    name: `Learnz`,
    date: "Started in June 2024",
    description: "A new way to learn",
    introduction: LearnzDescription,
    more: {
        description: LearnzIntroduction,
        stacks: [
            ["Next JS", NextJsImage],
            ["Docker", DockerImage],
        ],
    },
    img: LearnzImage,

};

export const ProjectsConfig = [
    LearnzProject,
    TiktoolsProject,
    KopeurProject,
    TradingBotProject,
];
