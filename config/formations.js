import {NextJsImage, PolytechImage, SteCroixImage, TiktoolsImage} from "@/config/content";


export const PolytechIntroduction = `As a co-founder of Tiktools, a SaaS platform for social media content automation, I designed a scalable microservices system, developed a video transition effects library, and integrated AI for image, audio, and text processing.`;

export const PolytechDescription = `As a co-founder of Tiktools, a SaaS platform for social media content automation, I designed a scalable microservices system, developed a video transition effects library, and integrated AI for image, audio, and text processing.`;

export const PolytechFormation = {
    name: `Polytech Nice`,
    date: "From December 2019 to June 2023",
    description: "Engineering School",
    introduction: PolytechIntroduction,

    more: {
        description: PolytechDescription,
    },
    img: PolytechImage,
    link: 'https://staging.tiktools.com',
};









export const SteCroixIntroduction = `As a co-founder of Tiktools, a SaaS platform for social media content automation, I designed a scalable microservices system, developed a video transition effects library, and integrated AI for image, audio, and text processing.`;

export const SteCroixDescription = `As a co-founder of Tiktools, a SaaS platform for social media content automation, I designed a scalable microservices system, developed a video transition effects library, and integrated AI for image, audio, and text processing.`;

export const SteCroixFormation = {
    name: `Ste Croix Ste Euverte`,
    date: "From December 2015 to June 2018",
    description: " University",
    introduction: SteCroixIntroduction,

    more: {
        description: SteCroixDescription,
    },
    img: SteCroixImage,
    link: 'https://staging.tiktools.com',
};



export const FormationConfig = [
    PolytechFormation,
    SteCroixFormation
]
