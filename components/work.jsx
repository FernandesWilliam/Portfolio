import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {KopeurProject, ProjectsConfig, TiktoolsProject, TradingBotProject} from "@/config/projects";
import React from "react";
import {Info} from "lucide-react";
import {LogoSticker} from "@/components/logo-sticker";
import {FormationConfig, PolytechFormation, SteCroixFormation} from "@/config/formations";
import {MissionsConfig} from "@/config/missions";

export function Project({img, name, link, description, introduction, date, more}) {
    return <Card className={'w-full relative overflow-hidden '}>
        <CardHeader>
            <CardTitle className={"flex flex-row gap-3 justify-between items-center z-10"}>
                <div className={'flex flex-row justify-center items-center gap-3'}>
                    <Image src={img} alt={name} className="w-[50px]"/>
                    <a href={link} target={link !== undefined ? '_blank' : ''}
                       className={'text-gray-300 cursor-pointer'}> {name} </a>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className={"z-20"} disabled={more === undefined}><Info/></Button>
                    </DialogTrigger>
                    <DialogContent className={' w-[90%] rounded-md '}>
                                <CardTitle className={"flex flex-row gap-3 justify-between items-center"}>
                                    <div className={'flex flex-row justify-center items-center gap-3'}>
                                        <Image src={img} alt={name} className="w-[50px]"/>
                                        <a href={link} target={'_blank'}
                                           className={'text-primary cursor-pointer'}> {name} </a>
                                    </div>
                                </CardTitle>
                                <CardContent className={'flex flex-col gap-4'}>
                                    <div>
                                        <h1 className={'text-2xl font-bold'}>Description</h1>
                                        <div className={"p-2 text-justify"}>
                                            {more.description}
                                        </div>
                                    </div>
                                    {more?.stacks !== undefined &&
                                        <div>
                                            <h1 className={'text-2xl font-bold'}>Stack Used</h1>
                                            <div className={"p-2 flex flex-wrap gap-2"}>
                                                {more.stacks.map(([name, img], index) => {
                                                    return <LogoSticker key={index} img={img} alt={name} width={30}
                                                                        height={30}></LogoSticker>;
                                                })}
                                            </div>
                                        </div>
                                    }
                                </CardContent>

                    </DialogContent>
                </Dialog>

            </CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
        </CardHeader>
        <CardContent className={'flex justify-center text-justify overflow-hidden'}>
            <svg className="absolute max-md:top-[-13px] max-md:left-[-69px] md:top-[-387px] md:left-[-175px] opacity-50" xmlns="http://www.w3.org/2000/svg" version="1.1"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 800 800">
                <defs>
                    <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%"
                            filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feGaussianBlur stdDeviation="62" x="0%" y="0%" width="100%" height="100%"
                                        in="SourceGraphic" edgeMode="none"
                                        result="blur"></feGaussianBlur>
                    </filter>
                </defs>
                <g filter="url(#bbblurry-filter)">
                    <ellipse rx="160.5" ry="150" cx="151.5601014941151" cy="576.8503213453043"
                             fill="hsla(48, 77%, 56%, 1.00)"></ellipse>
                    <ellipse rx="160.5" ry="150" cx="315.557253213453" cy="555.9973708547222"
                             fill="hsla(156, 70%, 65%, 1.00)"></ellipse>
                    <ellipse rx="160.5" ry="150" cx="254.94213579587284" cy="708.8825597313687"
                             fill="hsla(56, 72%, 63%, 1.00)"></ellipse>
                </g>
            </svg>
            {introduction}
        </CardContent>
        <CardFooter className={"flex justify-end italic text-gray-400 text-sm"}>

            <span className={"text-[12px]"}>{date}</span>
        </CardFooter>
    </Card>;
}


function WorkSection({work}) {
    return <div className={"gap-5 flex flex-wrap w-full justify-center items-center"}>
        {...work.map((workInformation, index) => {
            return <Project key={index}  {...workInformation} ></Project>;
        })}
    </div>;
}

export function Work() {


    return <Tabs defaultValue="projects" className={"w-[95%] relative"} orientation={'horizontal'}>
        <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="missions">Missions</TabsTrigger>
            <TabsTrigger value="formations">Formation</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className={"relative"}>
            <WorkSection work={ProjectsConfig}></WorkSection>
        </TabsContent>
        <TabsContent value="missions" className={"relative"}>
            <WorkSection work={MissionsConfig}></WorkSection>

        </TabsContent>
        <TabsContent value="formations" className={"relative"}>
            <WorkSection work={FormationConfig}/>
        </TabsContent>
    </Tabs>;
}


