import {TypeAnimation} from "react-type-animation";
import Image from "next/image";
import {GithubIconSvg} from "@/components/svg/github.icon.svg";
import {CCoilImage, GithubLink, LinkedInLink, LookingFor, ProfileImage2, SequenceDescription} from "@/config/content";
import {ContactDialog} from "@/components/contact-dialog";
import LinkedinImage from "@/public/network/linkedin.png";
import BlurFade from "@/components/magicui/blur-fade";


export function About() {

    return <div
        className="relative w-full max-md:h-[230px] md:h-[250px]
        grid md:grid-cols-[70%_30%] max-md:grid-cols-[60%_40%] md:p-[15px] max-md:px-[15px] max-md:pt-[30px]">
        <div className="flex flex-col w-full">
            <h1 className="text-[50px] font-bold">Hey, </h1>
            <h1 className="md:text-[40px] max-md:text-[25px] font-bold">I'm W<span className="text-secondary">ill</span>
            </h1>
            <div>
                <span className="md:text-[40px] max-md:text-[25px] font-bold"> I'm a </span>
                <TypeAnimation sequence={SequenceDescription} repeat={Infinity}
                               className="md:text-[40px] max-md:text-[25px] text-primary font-bold"
                               deletionSpeed={1}>
                </TypeAnimation>
            </div>
            <div className="text-[18px] capitalize font-semibold flex flex-row gap-3 items-center h-[60px]">
                <span className={"text-gray-300"}>Freelancing - Indie SaaS Maker</span>
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
                </a>
            </div>
        </div>
        <div className={"flex justify-center"}>
            <Image
                className="md:w-[250px] max-md:w-[210px]  h-fit rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
                src={ProfileImage2} alt={"Profile Image"}/>
        </div>
    </div>;

}
