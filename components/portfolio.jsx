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
import {LogoSticker} from "@/components/logo-sticker";
import React from "react";
import WebenlaAcademy from "@/public/webenla.academy.png";
import ResellSpotterLanding from "@/public/resell-spotter-ld.png";
import TiktoolsLanding from "@/public/tiktools-ld.png";
import Sook from "@/public/sook.png";
import TradingBotLd from "@/public/tradingbotchart.png";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {motion} from "framer-motion";
import CChaos from "@/public/ccchaos.svg";
import ComingSoon from "@/public/comingsoon.png";
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";


export function MoreInformation({logo, name, description, stacks = []}) {
    return <Dialog>
        <DialogTrigger asChild>
            <Button variant={'outline'} className={"hover:cursor-pointer"}><Info/></Button>
        </DialogTrigger>

        <DialogContent className={'w-[90%] rounded-md'}>
            <DialogHeader>
                <DialogTitle className={"flex flex-row items-center gap-4"}>
                    <Image src={logo}
                           className={"object-contain"}
                           width={40}/>
                    <span className={"font-bold text-[28px]"}>{name}</span></DialogTitle>
            </DialogHeader>
            <span className={"text-justify"}>{description}</span>
            {/*{more?.stacks !== undefined &&*/}
            {/*    <div>*/}
            {/*        <h1 className={'text-2xl font-bold'}>Stack Used</h1>*/}
            {/*        <div className={"p-2 flex flex-wrap gap-2"}>*/}
            {/*            {more.stacks.map(([name, img], index) => {*/}
            {/*                return <LogoSticker key={index} img={img} alt={name} width={30}*/}
            {/*                                    height={30}></LogoSticker>;*/}
            {/*            })}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*}*/}


        </DialogContent>
    </Dialog>;
}

export function PortfolioProject({
                                     logo,
                                     name,
                                     description,
                                     resume,
                                     linkTo,
                                     backgroundImage,
                                     date,
                                     more,
                                     exited = false,
                                 }) {

    return <Card className={"md:w-[400px] max-md:w-[350px]"}>
        <CardHeader className={"h-[150px] overflow-hidden"}>
            <CardTitle className={"flex flex-row gap-3 items-center"}>
                <Image src={logo} className={"object-contain"} width={35}/> <span>{name}</span>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className={"relative"}>
            <motion.div whileHover={{scale: 1.05}} className="relative overflow-hidden size-fit rounded-2xl">
                <Image

                    onClick={() => {
                        if (linkTo !== undefined) {
                            window.open(linkTo, "_blank");
                        }

                    }}
                    src={backgroundImage} className="rounded-xl opacity-80 hover:cursor-pointer"/>
                {exited && <div className="absolute right-0 top-0 h-16 w-16">
                    <div
                        className="absolute transform rotate-45 bg-gradient-to-r from-[#0EC991] to-[#32A79F]  text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                        Exited
                    </div>
                </div>}
            </motion.div>
        </CardContent>
        <CardFooter className={"flex justify-around text-[13px] italic text-gray-200 pt-[0px] pb-[10px] px-[10px]"}>
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
            description: "Learnz is a platform that offers courses in web development, design, and digital marketing.",
            logo: LearnzImage,
            backgroundImage: ComingSoon,
            date: "In progress"
        },
        {
            logo: WebenlaImage,
            name: "Webenla Academy",
            description: "Webenla Academy is a platform that offers courses in web development, design, and digital marketing.",
            backgroundImage: WebenlaAcademy,
            linkTo: "https://webenla.academy",
            date: "From June 2022 to September 2024"
        },
        {
            name: "Tiktools",
            description: "Tiktools is a platform that offers courses in web development, design, and digital marketing.",
            logo: TiktoolsImage,
            backgroundImage: TiktoolsLanding,
            exited: true,
            linkTo: "https://staging.aimotion.mov/",
            more: "My role has been to design the project architecture, implement a microservices system to horizontally scale video generation, create a library for adding transition effects to videos, develop project functionalities, build a personalized onboarding system for users, handle video manipulation via FFmpeg, create a Discord bot, work with local and API-based AI manipulation, and set up a reverse proxy.",
            date: "From December 2023 to March 2024"

        },

        {
            name: "Kopeur",
            description: "Application to buy Vinted items first",
            logo: KopeurImage,
            backgroundImage: Sook,
            exited: true,
            linkTo: "https://souk.to/en",
            date: "From November 2022 to May 2023"
        },
        {
            name: "ResellSpotter",
            description: "Application to buy Vinted items first",
            logo: ResellSpotterImage,
            linkTo: "https://www.resellspotter.com/",
            backgroundImage: ResellSpotterLanding,
            date: "From September 2023 to October 2023"
        },
        {
            name: "Trading Bot",
            description: "Trading Bot is a platform that offers courses in web development, design, and digital marketing.",
            logo: TradingBotImage,
            backgroundImage: TradingBotLd,
            date: "From April 2022 to August 2022"
        },

    ];
    return (
        <div className={'relative'}>
            <Image src={CChaos} className={"absolute opacity-30 w-[2000px] top-[-250px] z-[-1]"}></Image>
            <h1 className={"flex justify-center text-6xl mb-5"}>Portfolio</h1>
            <div className={"p-4 flex flex-wrap gap-5 justify-center"}>
                {...features.map((feature, index) => <PortfolioProject key={index} {...feature}/>)}
            </div>

        </div>
    );
}