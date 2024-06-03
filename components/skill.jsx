import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import JavaImage from "@/public/icons/stacks/java.png";
import NodeJsImage from "@/public/icons/stacks/node-js.png";
import NextJs from "@/public/icons/stacks/nextjs.png";
import DockerImage from "@/public/icons/stacks/docker.png";
import RustImage from "@/public/icons/stacks/rust.png";
import PythonImage from "@/public/icons/stacks/python.png";


import BitbucketImage from "@/public/icons/agile-software/bitbucket.png";
import JiraImage from "@/public/icons/agile-software/jira.png";
import TrelloImage from "@/public/icons/agile-software/trello.png";
import GithubImage from "@/public/icons/agile-software/github.png";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {CalendarIcon} from "lucide-react";
import {OrbitingCircles} from "@/components/magicui/orbiting-circle";
import {BasketballIconSvg} from "@/components/svg/basketball.icon.svg";
import {Separator} from "@/components/ui/separator";
import {PlaneIconSvg} from "@/components/svg/plane.icon.svg";
import {BlockchainIconSvg} from "@/components/svg/blockchain.icon.svg";
import {ClickUpIconSvg} from "@/components/svg/click-up.icon.svg";
import TiktoolsImage from "@/public/tiktools.png";


export function Interest() {
    return <div className="flex justify-center items-center relative">
             <span
                 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                 Interest</span>
        <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={60}
        ><Image src={DockerImage} alt={"Java"} width={30}
                height={30}/>
        </OrbitingCircles>
        <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={100}
        ><Image src={TrelloImage} alt={"Java"} width={30}
                height={30}/>
        </OrbitingCircles>

        <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={150}
        ><BlockchainIconSvg></BlockchainIconSvg>
        </OrbitingCircles>

        <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={200}
        >
            <BasketballIconSvg></BasketballIconSvg>
        </OrbitingCircles>

        <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            duration={10}
            delay={20}
            radius={230}
        >
            <PlaneIconSvg></PlaneIconSvg>
        </OrbitingCircles>
    </div>;
}

export function SkillElement({img, alt, content, footer}) {
    return <HoverCard openDelay={0.2} closeDelay={0}>
        <HoverCardTrigger asChild>
            <Button variant={"outline"} className="fit-content p-1">
                <Image src={img} alt={alt} width={30} height={30}/>
            </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
                <div className="w-[50px] mt-2">
                    <Image src={img} alt={alt} width={30} height={30}/>
                </div>
                <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{alt}</h4>
                    <p className="text-sm">
                        {content}
                    </p>
                    {footer !== undefined &&
                        <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                            <span className="text-xs text-muted-foreground">
                            {footer}
                            </span>
                        </div>
                    }
                </div>
            </div>
        </HoverCardContent>
    </HoverCard>;
}

export function SkillPart({type, children, center = "justify-center"}) {
    return <Card>
        <CardHeader>
            <CardTitle>{type}</CardTitle>
        </CardHeader>
        <CardContent className={`flex gap-4 flex-wrap items-center ${center} py-2`}>
            {children}
        </CardContent>
    </Card>;
}


export function Skill() {

    const stacks = [
        <Button  variant={"outline"} className="fit-content p-1 bg-[rgba(147,194,145,0.38)]"><Image src={JavaImage} alt={"Java"} width={30}
                                                             height={30}/></Button>,
        <Button variant={"outline"} className="fit-content p-1 bg-[rgba(147,194,145,0.38)]"><Image src={NodeJsImage} alt={"Java"} width={30}
                                                                       height={30}/></Button>,
        <Button variant={"outline"} className="fit-content p-1 bg-[rgba(147,194,145,0.38)]"><Image src={NextJs} alt={"Java"} width={30}
                                                                       height={30}/></Button>,

        <Button variant={"outline"} className="fit-content p-1 bg-[rgba(147,194,145,0.38)]"><Image src={DockerImage} alt={"Java"} width={30}
                                                                       height={30}/></Button>,
        <Button variant={"outline"} className="fit-content p-1 bg-[rgba(147,194,145,0.38)]"><Image src={RustImage} alt={"Java"} width={30}
                                                                       height={30}/></Button>,
        <Button variant={"outline"} className="fit-content p-1 bg-[rgba(147,194,145,0.38)]"><Image src={PythonImage} alt={"Java"} width={30}
                                                                       height={30}/></Button>,
        <Button variant={"outline"} className="fit-content p-1 bg-[rgba(147,194,145,0.38)]"><ClickUpIconSvg height={30} width={30}></ClickUpIconSvg></Button>
    ];

    const agileSoftware = [
        <SkillElement img={BitbucketImage}
                      alt={"Bitbucket"}
                      content={"version control repository."}
        />,
        <SkillElement img={GithubImage} alt={"Github"}
                      content={"version control repository."}
        ></SkillElement>,
        <SkillElement img={JiraImage}
                      alt={"Jira"}
                      content={"service that allows bug tracking, issue tracking and agile project management."}
        />,
        <SkillElement img={TrelloImage}
                      alt={"Trello"}
                      content={"web-based project management application."}
        ></SkillElement>,

    ];

    const langs = [
        <div className="gap-2 flex flex-col justify-center items-center">
            <div className="radial-progress text-[11px]" style={{"--value": 100, "--size": "50px"}}
                 role="progressbar">100%
            </div>
            French
        </div>,
        <div className="gap-2 flex flex-col justify-center items-center">
            <div className="radial-progress  text-[11px]" style={{"--value": 80, "--size": "50px"}}
                 role="progressbar">80%
            </div>
            English
        </div>,
    ];

    return <div id="skills" className="grid md:grid-rows-1  md:grid-cols-[5fr_1fr_5fr_1fr_5fr] gap-3 w-full md:min-h-[150px] mt-[10px]">
        <div className="flex gap-2 flex-col h-[120px]">
            <span className="font-bold text-[20px] text-center">Coding With</span>
            <div className="flex flex-wrap gap-2 justify-center items-center h-full">
                {...stacks}
            </div>
        </div>

        <div className="flex justify-center items-center">
            <Separator className={'h-[80px]'} orientation={'vertical'}/>
        </div>


        <div className={"flex gap-2 flex-col h-[120px]"}>
            <span className="font-bold text-[20px] text-center">Working With</span>
            <div className="flex flex-wrap gap-2 justify-center items-center h-full">
                {...agileSoftware}
            </div>
        </div>
        <div className="flex justify-center items-center">
            <Separator className={'h-[80px]'} orientation={'vertical'}/>
        </div>
        <div className="flex gap-2 flex-col h-[120px]">
            <span className="font-bold text-[20px] text-center">Speaking</span>
            <div className="flex flex-wrap gap-2 items-center justify-evenly h-full">
                {...langs}
            </div>
        </div>
    </div>;

}