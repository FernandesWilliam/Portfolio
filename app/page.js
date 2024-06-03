"use client";
import {NavBar} from "@/components/nav-bar";
import {About} from "@/components/about";
import {Skill} from "@/components/skill";
import {Work} from "@/components/work";
import {Button} from "@/components/ui/button";
import ProfileImage from "@/public/profil.png";
import Image from "next/image";
import ShineBorder from "@/components/magicui/shine-border";
export default function Home() {
    return (
        <main className={"w-full h-full"}>
            <svg className="absolute opacity-40 w-[100vw]" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink={"http://www.w3.org/1999/xlink"}
                 viewBox="0 0 800 800" opacity="1">
                <defs>
                    <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%"
                            filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feGaussianBlur stdDeviation="80" x="0%" y="0%" width="100%" height="100%"
                                        in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                    </filter>
                </defs>
                <g filter="url(#bbblurry-filter)">
                    <ellipse rx="153" ry="97" cx="516.621337890625" cy="254.83046470761923"
                             fill="rgba(57, 155, 38, 1.00)"></ellipse>
                    <ellipse rx="153" ry="97" cx="716.602388551722" cy="134.33521266757506"
                             fill="hsla(49, 90%, 55%, 1.00)"></ellipse>
                </g>
            </svg>

                <div
                    className="z-20 relative gap-10 flex w-full h-full min-h-screen flex-col items-center justify-between py-7 md:px-[50px] max-md:px-[20px]">
                    <NavBar></NavBar>
                    <About></About>
                    <div className="grid md:grid-cols-[4fr_2fr]">
                        <div className="p-10 justify-center gap-2 flex flex-col">
                        <h1 className="text-4xl font-bold">About Me</h1>
                        <div className="w-full flex justify-center items-center">
                            <span className="text-md  italic text-justify">I am a passionate Full Stack Developer with a keen interest in designing robust architectures and exploring cutting-edge technologies, especially those applied in computing. I thrive in dynamic environments and am known for my excellent communication skills and attentiveness. My autonomy and resourcefulness make me a professional synonymous with problem-solving and adaptability.</span>
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
