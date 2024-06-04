import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export function LogoSticker({
                                img, alt, width, height, onClick
                            }) {


    return <TooltipProvider delayDuration={300}>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button onClick={onClick}
                        variant={"outline"}
                        className="fit-content p-1 bg-[rgba(246,255,253,0.9)]">
                <Image src={img}
                       alt={alt}
                       width={width}
                       height={height}/></Button>
            </TooltipTrigger>
            <TooltipContent>
                {alt}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>;
}