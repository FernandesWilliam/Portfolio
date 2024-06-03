"use client";
import {NavBar} from "@/components/nav-bar";
import {About} from "@/components/about";
import {Skill} from "@/components/skill";
import {Work} from "@/components/work";
import {Button} from "@/components/ui/button";

import Image from "next/image";
import ShineBorder from "@/components/magicui/shine-border";
import {GlossPolygon} from "@/components/gloss-polygon";
import {AboutMe, ProfileImage} from "@/content";

export default function Home() {
    return (
        <main className={"w-full h-full"}>
            <GlossPolygon className={"absolute opacity-40 w-[100vw]"}/>
            <div
                className="z-20 relative gap-10 flex w-full h-full min-h-screen flex-col items-center justify-between py-7 md:px-[50px] max-md:px-[20px]">
                <NavBar></NavBar>
                <About></About>
                <div className="grid md:grid-cols-[4fr_2fr]">
                    <div className="p-10 justify-center gap-2 flex flex-col">
                        <h1 className="text-4xl font-bold">About Me</h1>
                        <div className="w-full flex justify-center items-center">
                            <span className="text-md  italic text-justify">{AboutMe}</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <ShineBorder
                            className=" h-fit w-[130px]  rounded-md p-[2px] shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
                            color={["#4ecb4c", "#ffae2c", "#f9ff0a"]}>
                            <Image className=" rounded-md" src={ProfileImage}/>
                        </ShineBorder>

                    </div>
                </div>
                <Skill></Skill>
                <Work></Work>

                <Button>Get In Touch</Button>
            </div>


        </main>
    );
}
