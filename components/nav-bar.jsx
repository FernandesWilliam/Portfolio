import {MenuIcon} from "@/components/icons/menu.icon";
import {useState} from "react";
import {CloseIcon} from "@/components/icons/close.icon";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuPortal,
    DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import ShineBorder from "@/components/magicui/shine-border";
import {BorderBeam} from "@/components/magicui/border-beam";
import {ContactDialog} from "@/components/contact-dialog";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Logo from "@/public/logo2.png";
import Image from "next/image";
export function NavBar() {

    const [open, setOpen] = useState(false);
    return <nav className="flex w-full h-[80px] justify-between items-center">
        <h1 className="text-[40px] font-bold flex flex-row justify-center items-center">
            <Image src={Logo} className={"size-[100px]"}/>

            <p className={"max-md:opacity-0"}>Portfolio</p>
        </h1>
        <div>
            <div className={"flex items-center justify-evenly"}>
                <div className={"relative"}>
                    <ContactDialog
                        onClick={() => {
                            console.log("Contact Me");
                        }}
                        text={'Get in Touch'}
                                   variant={'outline'}
                                   buttonClassName={"max-w-[100px]  md:max-w-[140px]  min-h-[46px] z-30"}/>

                    <BorderBeam size={250} duration={12} delay={9} className={'rounded hover:cursor-pointer'}/>
                </div>
            </div>
        </div>
    </nav>;

}