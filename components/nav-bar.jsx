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

export function NavBar() {
    return <nav className="flex w-full h-[80px] justify-between items-center">
        <h1 className="text-[40px] font-bold flex flex-row">
            <p>I'm W</p><p className="text-secondary">ill</p>
        </h1>
        <div>
            <div className={"relative"}>
                <ContactDialog text={'Get in Touch'}
                               variant={'outline'}
                               buttonClassName={"min-w-[80px]  md:min-w-[140px]  min-h-[46px]"}/>
                <BorderBeam size={150} duration={12} delay={9}
                            className={"min-w-[80px]   md:min-w-[140px] hover:cursor-pointer min-h-[46px] rounded-md border"}>
                </BorderBeam>
            </div>
        </div>
    </nav>;

}