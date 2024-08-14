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

export function NavBar() {

    const [open, setOpen] = useState(false);
    return <nav className="flex w-full h-[80px] justify-between items-center">
        <h1 className="text-[40px] font-bold flex flex-row">
            <p>P</p><p className="text-secondary">ortfolio</p>
        </h1>
        <div>
            <div className={"flex items-center justify-evenly"}>
                <div className={"relative "}>
                    <ContactDialog
                        onClick={() => {
                            console.log("Contact Me");
                        }}
                        text={'Get in Touch'}
                                   variant={'outline'}
                                   buttonClassName={"max-w-[80px]  md:max-w-[140px]  min-h-[46px] z-30"}/>

                    <BorderBeam size={250} duration={12} delay={9} className={'rounded hover:cursor-pointer'}/>
                </div>
            </div>
        </div>
    </nav>;

}