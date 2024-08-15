import {Separator} from "@/components/ui/separator";
import {LogoSticker} from "@/components/logo-sticker";
import {AgileSoftwareUsed, StacksUsed} from "@/config/content";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export function Skill() {

    const langs = [
        <div key={'fr'} className="gap-2 flex flex-col justify-center items-center">
            <div className="radial-progress text-[11px]" style={{"--value": 100, "--size": "50px"}}
                 role="progressbar">100%
            </div>
            French
        </div>,
        <div key={'en'} className="gap-2 flex flex-col justify-center items-center">
            <div className="radial-progress  text-[11px]" style={{"--value": 80, "--size": "50px"}}
                 role="progressbar">80%
            </div>
            English
        </div>,
    ];

    return <div id="skills"
                className="grid md:grid-rows-1  md:grid-cols-[5fr_1fr_5fr_1fr_5fr] gap-3 w-full md:min-h-[150px] mt-[10px]">
        <div className="flex gap-2 flex-col h-[120px]">
            <span className="font-bold text-[20px] text-center">Coding With</span>
            <div className="flex flex-wrap gap-2 justify-center items-center h-full">
                {...StacksUsed.map(([alt, img], index) => {
                    return <div key={index} className="fit-content p-1 bg-white rounded-md">
                        <Image src={img}
                               alt={alt}
                               width={30}
                               height={30}/></div>;
                })
                }
            </div>
        </div>

        <div className="flex justify-center items-center ">
            <Separator className={' md:hidden  w-[80px]'}/>
            <Separator className={'max-md:hidden h-[80px]'} orientation={'vertical'}/>
        </div>


        <div className={"flex gap-2 flex-col h-[120px]"}>
            <span className="font-bold text-[20px] text-center">Working With</span>
            <div className="flex flex-wrap gap-2 justify-center items-center h-full">
                {...AgileSoftwareUsed.map(([alt, img], index) => {
                    return <div key={index} className="fit-content p-1 bg-white rounded-md size-[38px] flex justify-center items-center">
                        <Image src={img}
                               alt={alt}
                               width={30}
                               height={30}/></div>;
                })
                }
            </div>
        </div>

        <div className="flex justify-center items-center ">
            <Separator className={' md:hidden  w-[80px]'}/>
            <Separator className={'max-md:hidden h-[80px]'} orientation={'vertical'}/>
        </div>
        <div className="flex gap-2 flex-col h-[120px]">
            <span className="font-bold text-[20px] text-center">Speaking</span>
            <div className="flex flex-wrap gap-2 items-center justify-evenly h-full">
                {...langs}
            </div>
        </div>
    </div>;

}