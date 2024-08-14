"use client";
import {NavBar} from "@/components/nav-bar";
import {About} from "@/components/about";
import {Skill} from "@/components/skill";


import Image from "next/image";
import {GlossPolygon} from "@/components/gloss-polygon";
import {AboutMe, ProfileImage} from "@/config/content";
import {ContactDialog} from "@/components/contact-dialog";
import Osciallate from "@/public/oooscillate.svg";
import {Portfolio} from "@/components/portfolio";
import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
    return (
        <main className={"w-full h-full overflow-hidden"}>
            <Image alt={"Oscillation"} className={"absolute opacity-10 w-[2000px]"} src={Osciallate}/>
            <GlossPolygon className={"absolute opacity-40 w-[100vw]"}/>
            <div
                className="z-20 relative gap-10 flex w-full h-full min-h-screen flex-col items-center justify-between py-7 md:px-[50px] max-md:px-[20px]">
                <NavBar></NavBar>
                <About></About>
                <div className="grid md:grid-cols-[4fr_2fr] mt-[30px]">
                    <div className="p-10 justify-center gap-2 flex flex-col">
                        <h1 className="text-4xl font-bold">About Me</h1>
                        <div className="w-full flex justify-center items-center">
                            <BlurFade>
                                <span className="text-md  italic text-justify">{AboutMe}</span>
                            </BlurFade>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                    </div>
                </div>
                <Skill></Skill>
                <Portfolio></Portfolio>
                <ContactDialog text={'Get in Touch'}/>
            </div>


        </main>
    );
}
