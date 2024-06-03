import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import TiktoolsImage from "@/public/tiktools.png";
import TiktoolsImageUI from "@/public/tiktools-ui.png";
import {Separator} from "@/components/ui/separator";

export function TiktoolsProject() {


    return <Card>
        <CardHeader>
            <CardTitle className={"gap-2 flex flex-col"}>
                <div className="flex flex-raw gap-3 justify-start items-center">
                    <Image src={TiktoolsImage} alt={"tiktools logo"} className="w-[30px]"/>
                    <span> Tiktools </span>
                </div>

            </CardTitle>
            <CardDescription>
                Tiktools is a tool to help you grow your Tiktok account.
            </CardDescription>
        </CardHeader>
        <CardContent className={'flex justify-center text-justify'}>
            I'm the Co-Founder of Tiktools. We are a team of 3 people.
            We are working on a tool to help you grow your Tiktok account.
            We are using the latest technologies to provide you the best experience.
            We are using NextJs, NodeJs, Rust, and Python. We are also using Docker to deploy our application.
        </CardContent>
    </Card>;
}