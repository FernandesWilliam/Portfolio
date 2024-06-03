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


function Menu({items}) {
    function onPressed(e) {
        console.log("Pressed");
        console.log(e.target);
    }

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button className="h-10 w-10 p-0"><MenuIcon size={'size-6'}></MenuIcon> </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuGroup onClick={onPressed}>
                {...items.map((item, index) => {
                    return <DropdownMenuItem key={index} className="cursor-pointer">
                        {item}
                    </DropdownMenuItem>;
                })}
            </DropdownMenuGroup>
            <DropdownMenuSeparator/>
        </DropdownMenuContent>
    </DropdownMenu>;
}

export function NavBar() {


    const [nav, setNav] = useState(false);

    const navItems = ["About", "Skills", "Expertise", "Projects", "Contact"];

    return <nav className="flex w-full h-[80px] justify-between items-center">
        <h1 className="text-[40px] font-bold flex flex-row">
            <p>I'm W</p><p className="text-secondary">ill</p>
        </h1>

        <div>
            <ShineBorder
                borderWidth={1}
                borderRadius={4}
                className="min-w-[140px] min-h-[46px] h-[46px] m-0 p-[1px] text-center
                !bg-background items-center
                hover:!bg-accent hover:text-background
             hover:cursor-pointer "
                color={["#4ecb4c", "#ffae2c", "#f9ff0a"]}>
                Get In touch
            </ShineBorder>
        </div>
    </nav>;

}