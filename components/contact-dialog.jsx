import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Separator} from "@/components/ui/separator";
import {LinkedInLink, MailAddress, PhoneNumber} from "@/config/content";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";


export function ContactDialog({text, buttonClassName, variant}) {
    const [open, setOpen] = useState(true);

    function openDialog() {
        setOpen(true);
        console.log("adssa");
    }

    function closeDialog() {
        console.log("adssa");
    }

    return <Dialog open={false} onOpenChange={closeDialog}>
        <DialogTrigger asChild>
            <Button onClick={openDialog} className={buttonClassName} variant={variant}>{text}</Button>
        </DialogTrigger>
        <DialogContent>
            <CardHeader className={"py-[5px]"}>
                <CardTitle>
                    Contacts :
                </CardTitle>
            </CardHeader>
            <CardContent className={'flex-col flex gap-3 text-[14px] justify-center'}>
                <a href="mailto:">{MailAddress}</a>
                <a href={'tel:' + PhoneNumber}>{PhoneNumber}</a>
                <a href={LinkedInLink}>Will</a>
            </CardContent>
        </DialogContent>
    </Dialog>;
}