import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@radix-ui/react-dropdown-menu";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import TiktoolsImage from "@/public/tiktools.png";
import KopeurImage from "@/public/kopeur.jpeg";
import TradingIcon from "@/public/traiding-icon.png";
import ResellSpotterImage from "@/public/resell_spotter.png";
import WebenlaImage from "@/public/webenla-academy-logo.png";
import I2NImage from "@/public/i2n.png";
import PolytechImage from "@/public/polytech.webp";
import SteCroixImage from "@/public/stecroix.jpeg";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";


export function Project({img, name, description, content, date, more}) {
    return <Card>
        <CardHeader>
            <CardTitle className={"gap-2 flex flex-col"}>
                <div className="flex flex-raw gap-3 justify-start items-center">
                    <Image src={img} alt={"tiktools logo"} className="w-[30px]"/>
                    <span> {name} </span>
                </div>
            </CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
        </CardHeader>
        <CardContent className={'flex justify-center text-justify'}>
            {content}
        </CardContent>
        <CardFooter className={"flex justify-between italic text-gray-400 text-sm"}>
            <Dialog>
                <DialogTrigger disabled={more === undefined}>
                    See More
                </DialogTrigger>
                <DialogContent>
                    {more}
                </DialogContent>
            </Dialog>
            {date}
        </CardFooter>
    </Card>;
}

export function TiktoolsProject() {
    const tiktoolsContent = `As one of the co-founders of Tiktools, a SaaS platform that accelerates and automates content creation for social media, I was responsible for designing the project's architecture and implementing a microservices system to horizontally scale video generation. I developed a library to add transition effects to videos and worked on various features of the project. Additionally, I created an onboarding system for users with personalized tracking, manipulated videos using FFmpeg, developed a Discord bot, and utilized both local and API-based AI (Image / Audio / Text).

`

    return <Project
        content={tiktoolsContent}
        description={"Tool that creates content for social media for you"}
        img={TiktoolsImage}
        name={"Tiktools"}
        date={"From December 2023 to June 2024"}
    />;
}

export function KopeurProject() {
    const kopeurContent = "I am one of the co-founders of Kopeur, a now-defunct SaaS company. The business focused on retrieving new items on Vinted more quickly, before they appeared in the feed. My role in the company included designing and implementing the architecture, setting up environment pipelines for server deployment, implementing a reverse proxy and DNS routing via a DNS challenge, optimizing the aggregation and search for new Vinted items, developing a high-performance algorithm to retrieve Vinted items with a delay of less than 300 ms, implementing a WebSocket system to deliver items to users, and setting up a custom end-to-end testing system.";
    return <Project
        content={kopeurContent}
        description={"Application to buy Vinted items first"}
        img={KopeurImage}
        name={"Kopeur"}
        more={"adaskl"}
        date={"From October 2022 to May 2023"}
    />;
}

export function TradingBot() {
    const tradingContent = "I developed a personal trading bot project. This bot uses an algorithm to buy and sell cryptocurrency based on the targeted crypto's price movements.";
    return <Project
        content={tradingContent}
        description={"Cryptocurrency Trading Bot"}
        img={TradingIcon}
        name={"Trading Bot"}
        date={"From February 2022 to November 2022"}
    />;
}

export function Projects() {

    const projects = [
        TiktoolsProject,
        KopeurProject,
        TradingBot
    ];

    return <div>
        <CardContent className="gap-5 flex flex-wrap w-full justify-center items-center">
            {...projects.map((Project, index) => {
                return <Project key={index}></Project>
            })}

        </CardContent>
        <CardFooter className={"flex w-full justify-end"}>
            <span className="text-sm italic font-bold opacity-45">Updated 1 June 2024</span>
        </CardFooter>
    </div>;
}

export function ResellSpotter() {
    const spotterContent = "I'm the Co-Founder of Kopeur. We are a team of 3 people.\n" +
        "We are working on a tool to help you grow your Tiktok account.\n" +
        "We are using the latest technologies to provide you the best experience.\n" +
        "We are using NextJs, NodeJs, Rust, and Python. We are also using Docker to deploy our application.";
    return <Project
        content={spotterContent}
        description={"Kopeur is a tool to help you grow your Tiktok account."}
        img={ResellSpotterImage}
        name={"Resell Spotter"}
    />;
}


export function PolytechNice() {
    const spotterContent = "I'm the Co-Founder of Kopeur. We are a team of 3 people.\n" +
        "We are working on a tool to help you grow your Tiktok account.\n" +
        "We are using the latest technologies to provide you the best experience.\n" +
        "We are using NextJs, NodeJs, Rust, and Python. We are also using Docker to deploy our application.";
    return <Project
        content={spotterContent}
        description={"Kopeur is a tool to help you grow your Tiktok account."}
        img={PolytechImage}
        name={"Polytech Nice Sophia"}
    />;
}

export function SteCroix() {
    const spotterContent = "I'm the Co-Founder of Kopeur. We are a team of 3 people.\n" +
        "We are working on a tool to help you grow your Tiktok account.\n" +
        "We are using the latest technologies to provide you the best experience.\n" +
        "We are using NextJs, NodeJs, Rust, and Python. We are also using Docker to deploy our application.";
    return <Project
        content={spotterContent}
        description={"Kopeur is a tool to help you grow your Tiktok account."}
        img={SteCroixImage}
        name={"Saint Croix Saint Euverte"}
    />;
}

export function Formations() {
    const formations = [
        PolytechNice,
        SteCroix
    ];

    return <div>
        <CardContent className=" gap-5 flex flex-wrap w-full justify-center items-center">
            {...formations}
            {...formations.map((Formation, index) => {
                return <Formation key={index}></Formation>
            })}

        </CardContent>
        <CardFooter className={"flex w-full justify-end"}>
            <span className="text-sm italic font-bold opacity-45">Updated 1 June 2024</span>
        </CardFooter>
    </div>;
}

export function Webenla() {
    const webenlaContent = "I'm the Co-Founder of Kopeur. We are a team of 3 people.\n" + "";
    return <Project
        content={webenlaContent}
        description={"Kopeur is a tool to help you grow your Tiktok account."}
        img={WebenlaImage}
        name={"Webenla"}/>;
}


export function I2N() {
    const i2nContent = "I'm the Co-Founder of Kopeur. We are a team of 3 people.\n" + "";
    return <Project
        content={i2nContent}
        description={"Kopeur is a tool to help you grow your Tiktok account."}
        img={I2NImage}
        name={"I2N"}/>;
}

export function Missions() {
    const missions = [
        ResellSpotter,
        Webenla,
        I2N
    ];

    return <div>
        <CardContent className=" gap-5 flex flex-wrap w-full justify-center items-center">
            {...missions}
            {...missions.map((Mission, index) => {
                return <Mission key={index}></Mission>
            })}

        </CardContent>
        <CardFooter className={"flex w-full justify-end"}>
            <span className="text-sm italic font-bold opacity-45">Updated 1 June 2024</span>
        </CardFooter>
    </div>
}

export function Work() {
    return <Tabs defaultValue="projects" className={"w-[95%] relative"} orientation={'horizontal'}>
        <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="missions">Missions</TabsTrigger>
            <TabsTrigger value="formations">Formation</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className={"relative"}>
            <Projects></Projects>
        </TabsContent>
        <TabsContent value="missions" className={"relative"}>
            <Missions></Missions>
        </TabsContent>
        <TabsContent value="formations" className={"relative"}>
            <Formations></Formations>
        </TabsContent>
        <svg className="absolute opacity-50"
             xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 800 450" opacity="0.74">
            <defs>
                <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%"
                        filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feGaussianBlur stdDeviation="56" x="0%" y="0%" width="100%" height="100%"
                                    in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
                <ellipse rx="111.5" ry="113" cx="62.422933405095904" cy="377.84229070490056"
                         fill="hsla(44, 75%, 57%, 1.00)"></ellipse>
            </g>
        </svg>
    </Tabs>;
}