import {cn} from "@/lib/utils";
import TiktoolsImage from "@/public/tiktools.png";
import ResellSpotterImage from "@/public/resell_spotter.png";
import KopeurImage from "@/public/kopeur.jpeg";
import WebenlaImage from "@/public/webenla-academy-logo.png";
import Image from "next/image";
export default function AvatarCircles({
                                          numPeople,
                                          className,
                                      }) {
    return (
        <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
            <Image
                className="h-10 w-10 rounded-full border-[1px] border-white "
                src={TiktoolsImage}
                alt=""
            />
            <Image
                className="h-10 w-10 rounded-full border-[1px] border-white "
                src={ResellSpotterImage}
                alt=""
            />
            <Image
                className="h-10 w-10 rounded-full border-[1px] border-white "
                src={KopeurImage}
                alt=""
            />
        </div>
    );
}