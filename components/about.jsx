import {TypeAnimation} from "react-type-animation";
import {Button} from "@/components/ui/button";
import Image from "next/image";


import {BentoCard, BentoGrid} from "@/components/magicui/bento-grid";

import Marquee from "@/components/magicui/marquee";
import {cn} from "@/lib/utils";
import AvatarCircles from "@/components/magicui/avatar-circles";
import {GithubIconSvg} from "@/components/svg/github.icon.svg";
import {LinkedinIconSvg} from "@/components/svg/linkedin.icon.svg";
import {MailIconSvg} from "@/components/svg/mail.icon.svg";
import WordRotate from "@/components/magicui/word-rotate";
import {GithubLink, LinkedInLink, LookingFor, SequenceDescription} from "@/config/content";
import {ContactDialog} from "@/components/contact-dialog";
import LinkedinImage from "@/public/network/linkedin.png";
import MailImage from "@/public/network/mail.png";


const files = [
    {
        name: "Kopeur",
        body: "Kopeur is",
    },
    {
        name: "finances.xlsx",
        body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
    },
    {
        name: "logo.svg",
        body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
    },
    {
        name: "keys.gpg",
        body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
    },
    {
        name: "seed.txt",
        body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
    },
];

export function ProjectBento({className}) {
    const feature = {
        Icon: AvatarCircles,
        name: "My Projects",
        description: "Discover my personal projects or the ones I've contributed to.",
        href: "/#skills",
        cta: "View",
        className: "col-span-3 lg:col-span-1 bg-red-950 dark:bg-transparent" + " "+ className,
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                        )}
                    >
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white ">
                                    {f.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                    </figure>
                ))}
            </Marquee>
        )
    };
    return  <BentoCard  {...feature}/>
}

export function About() {

    return <div
        className="relative w-full max-md:h-[230px] md:h-[250px]
        grid md:grid-cols-[70%_30%] max-md:grid-rows-2 md:p-[15px] max-md:px-[15px] max-md:pt-[30px]">


        <div className="flex flex-col w-full">
            <h1 className="text-[50px] font-bold">Hey, </h1>
            <h1 className="md:text-[40px] max-md:text-[25px] font-bold">I'm W<span className="text-secondary">ill</span></h1>
                <div>
                    <span className="md:text-[40px] max-md:text-[25px] font-bold"> I'm a </span>
                    <TypeAnimation sequence={SequenceDescription} repeat={Infinity}
                                   className="md:text-[40px] max-md:text-[25px] text-primary font-bold"
                                   deletionSpeed={1}>
                    </TypeAnimation>
                </div>
                <div className="text-[20px] capitalize font-semibold flex flex-row gap-3 items-center h-[80px]">
                    <span className="max-md:text-[17px] md:text-[20px]">Need to </span>
                    <WordRotate
                        className="max-md:text-[17px] md:text-[20px] text-black dark:text-green-200 p-0 h-full"
                        duration={1500}
                        words={LookingFor}
                    />
                    <span className="max-md:text-[17px] md:text-[22px]">Your app ? </span>
                </div>
            <div className="flex gap-2 flex-row w-full items-center">
                <ContactDialog text={'Contact Me'}
                               buttonClassName={"bg-accent"}/>
                <a href={GithubLink} target={'_blank'} className={""}>
                    <GithubIconSvg className="w-[36px] h-[36] cursor-pointer" svgColor={"#ffffff"}></GithubIconSvg>
                </a>
                <a href={LinkedInLink} target={'_blank'}>
                    <Image src={LinkedinImage} alt={"Linkedin"}
                           className="w-[36px] h-[36px] cursor-pointer rounded-sm"></Image>
                    {/*<LinkedinIconSvg className="w-[36px] h-[36px] cursor-pointer"*/}
                    {/*                 svgColor={"#ffffff"}></LinkedinIconSvg>*/}
                </a>
                <a href={"sdas"} className={""} target={'_blank'}>
                    <Image src={MailImage} alt={"Mail"}
                           className="w-[36px] h-[36px] cursor-pointer bg-white rounded-sm p-1"></Image>
                    {/*<LinkedinIconSvg className="w-[36px] h-[36px] cursor-pointer"*/}
                    {/*                 svgColor={"#ffffff"}></LinkedinIconSvg>*/}
                </a>


            </div>
        </div>
        <div className={"max-md:hidden"}>
            <ProjectBento className={"h-[220px]"}></ProjectBento>
        </div>

    </div>;

}
