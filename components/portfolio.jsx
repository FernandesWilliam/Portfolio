import {BentoCard, BentoGrid} from "@/components/magicui/bento-grid";
import {CalendarIcon, Info} from "lucide-react";
import {
    KopeurImage,
    LearnzImage,
    ResellSpotterImage,
    TiktoolsImage,
    TradingBotImage,
    WebenlaImage
} from "@/config/content";
import Image from "next/image";
import React from "react";
import ResellSpotterLanding from "@/public/resell-spotter-ld.png";
import TiktoolsLanding from "@/public/tiktools.gif";
import Sook from "@/public/sook.png";
import TradingBotLd from "@/public/tradingbotchart.png";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {motion} from "framer-motion";
import CChaos from "@/public/ccchaos.svg";
import ComingSoon from "@/public/comingsoon.png";
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import WebenlaGif from "@/public/webenlagif.gif";
import BlurFade from "@/components/magicui/blur-fade";
import {Badge} from "@/components/ui/badge";

export function MoreInformation({logo, name, description, stacks = []}) {
    return <Dialog>
        <DialogTrigger asChild>
            <Button variant={'outline'} className={"hover:cursor-pointer"}><Info/></Button>
        </DialogTrigger>

        <DialogContent className={'w-[90%] rounded-md'}>
            <DialogHeader>
                <DialogTitle className={"flex flex-row items-center gap-4"}>
                    <Image src={logo}
                           alt={"company logo"}
                           className={"object-contain"}
                           width={40}/>
                    <span className={"font-bold text-[28px]"}>{name}</span></DialogTitle>
            </DialogHeader>
            <span className={"text-justify leading-[36px]"}>{description}</span>
        </DialogContent>
    </Dialog>;
}

export function PortfolioProject({
                                     logo,
                                     name,
                                     description,
                                     linkTo,
                                     backgroundImage,
                                     date,
                                     stacks = [],
                                     more,
                                     exited = false,
                                 }) {

    return <Card className={"md:w-[400px] max-md:w-[400px]"}>
        <CardHeader className={"h-[170px] overflow-hidden"}>
            <CardTitle className={"flex flex-row gap-3 items-center h-[35px]"}>
                <Image src={logo} alt={name} className={"object-contain"} width={35}/> <span>{name}</span>
            </CardTitle>
            <CardDescription>
                <span>{description}</span>
                <span className={"mt-2 flex gap-2"}>
                    {...stacks.map((stack, index) => <Badge key={index} className={"bg-gray-100 text-accent"}>{stack}
                    </Badge>)}
                </span>


            </CardDescription>
        </CardHeader>
        <CardContent className={"relative flex justify-center items-center"}>

            <motion.div whileHover={{scale: 1.05}} className="relative
                h-[225px]
            overflow-hidden size-fit rounded-2xl">
                <Image
                    alt={"Link to company"}
                    onClick={() => {
                        if (linkTo !== undefined) {
                            window.open(linkTo, "_blank");
                        }

                    }}
                    src={backgroundImage} className="rounded-xl opacity-95 hover:cursor-pointer object-contain"/>
                {exited && <div className="absolute right-0 top-0 h-16 w-16">
                    <div
                        className="absolute transform rotate-45 bg-gradient-to-r from-[#0EC991] to-[#32A79F]  text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                        Exited
                    </div>
                </div>}
            </motion.div>
        </CardContent>
        <CardFooter className={"flex justify-between text-[13px] italic text-gray-200 pt-[0px] pb-[10px] px-[10px]"}>
            <motion.div whileHover={{scale: 1.05}} className={"size-fit"}>
                <MoreInformation
                    logo={logo}
                    name={name}
                    description={more}/>
            </motion.div>
            <span>{date}</span>
        </CardFooter>
    </Card>;

}

export function Portfolio() {
    const features = [
        {
            name: "Learnz",
            description: "Co-founder of Learnz, a platform that automates course note creation to optimize study time.",
            logo: LearnzImage,
            backgroundImage: ComingSoon,
            more: 'As CTO at Learnz, I manage the technical infrastructure and develop an efficient working environment. I’m also responsible for the note creation and presentation features.',
            date: "In progress",
            stacks: [
                "NextJs",
                "N8N",
                "Python",
                "NestJS",
                "Postgres",
            ]
        },
        {
            logo: WebenlaImage,
            name: "Webenla Academy",
            description: "A cognitive development platform designed to enhance skills through fun and engaging activities.",
            backgroundImage: WebenlaGif,
            more: 'As a Software Architect at Webenla Academy, I established the entire DevOps infrastructure, including CI/CD pipelines, technology selection, and the local development environment. I developed a custom front-end framework to accelerate the development process and managed the platform’s scalability on the cloud. Additionally, I handled payment processing and user authentication systems within the app.',
            linkTo: "https://webenla.academy",
            date: "From June 2022 to September 2024",
            stacks: [
                "Javascript",
                "Node js",
                "Postgres",
            ]
        },
        {
            name: "Tiktools",
            description: "Co-founder of Tiktools, a platform designed to automate the creation of viral content.",
            logo: TiktoolsImage,
            backgroundImage: TiktoolsLanding,
            exited: true,
            linkTo: "https://staging.aimotion.mov/",
            more: "I designed the project architecture and implemented a microservices system to horizontally scale video generation. I developed a library for adding transition effects, handled video manipulation with FFmpeg, and built key functionalities, including a personalized user onboarding system. Additionally, I created a Discord bot, worked with AI for video manipulation (both locally and via APIs), and set up a reverse proxy.",
            date: "From December 2023 to March 2024",
            stacks: [
                "NextJs",
                "Python",
                "NestJS",
                "MongoDB",
            ]
        },

        {
            name: "Kopeur",
            description: "Co-founder of Kopeur, a platform to buy Vinted items first",
            logo: KopeurImage,
            backgroundImage: Sook,
            exited: true,
            linkTo: "https://souk.to/en",
            date: "From November 2022 to May 2023",
            stacks: [
                "NextJs",
                "Typescript",
                "Rust",
                "Postgres",
            ],
            more: "I managed the project’s architecture and CI/CD pipeline. My primary role involved designing a highly optimized algorithm capable of fetching articles from Vinted within less than 150 ms of their release. This project was particularly challenging due to the need for both macro and micro-level scaling and code optimization, all of which I handled."
        },
        {
            name: "ResellSpotter",
            description: "Platform to buy Vinted items first",
            logo: ResellSpotterImage,
            linkTo: "https://www.resellspotter.com/",
            backgroundImage: ResellSpotterLanding,
            date: "From September 2023 to October 2023",
            stacks: [
                "Typescript",
            ],
            more: "I developed a Discord bot that interacts with the Vinted API, allowing users to set up personalized channels within the bot for tracking specific items."

        },
        {
            name: "Wabot",
            description: "Side Project to automate crypto trading",
            logo: TradingBotImage,
            backgroundImage: TradingBotLd,
            date: "From April 2022 to August 2022",
            stacks: [
                "Typescript",
                "React JS",
                "Mongo DB",
                "Java"
            ],
            more:"I developed an interface to monitor trade entries made by our trading bot. I also handled log retrieval and integrated APIs to interact with the Binance broker."
        },

    ];
    return (
        <div className={'relative'}>
            <Image alt={"Cchaos image"} src={CChaos} className={"absolute opacity-30 w-[2000px] top-[-250px] z-[-1]"}></Image>
            <h1 className={"flex justify-center text-6xl mb-5"}>Portfolio</h1>
            <div className={"p-4 flex flex-wrap gap-5 justify-center"}>
                {...features.map((feature, index) => <BlurFade key={index} delay={0.25 + index * 0.05}
                                                               inView><PortfolioProject key={index} {...feature}/>
                </BlurFade>)}
            </div>

        </div>
    );
}