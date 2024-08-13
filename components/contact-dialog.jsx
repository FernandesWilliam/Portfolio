import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useRef, useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


export function ContactDialog({text, buttonClassName, variant}) {
    const [open, setOpen] = useState(false);
    const mailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();
    const {toast} = useToast();

    function openDialog() {
        setOpen(true);
    }

    function closeDialog() {
        setOpen(false);
    }

    return <Dialog open={open} onOpenChange={(open) => {
        setOpen(open);
    }}>
        <DialogTrigger asChild>
            <Button onClick={openDialog} className={buttonClassName} variant={variant}>{text}</Button>
        </DialogTrigger>
        <DialogContent
            onBackdropClick={() => {
                console.log('backdrop clicked');
            }}
            onInteractOutside={() => {
                closeDialog();
            }}>
            <DialogHeader>
                <DialogTitle>
                    Get in Touch
                </DialogTitle>
                <DialogDescription>
                    Want to talk about your project ?
                </DialogDescription>
            </DialogHeader>
            <div className={'flex-col flex gap-2 text-[14px] justify-center'}>
                <Separator orientation={'horizontal'}/>
                <label>Mail</label>
                <Input type={'text'}
                       ref={mailRef}
                       placeholder={"Insert your mail"}/>

                <label>Subject</label>

                <Input type={'text'} ref={subjectRef} placeholder={"Let me know what I can do for you"}/>

                <label className={""}>Message</label>
                <Textarea
                    ref={messageRef}
                    type={'text'} placeholder={"Insert your message"}/>
            </div>
            <DialogFooter>
                <Button variant={'outline'} onClick={async () => {
                    const mail = mailRef.current.value;
                    const subject = subjectRef.current.value;
                    const message = messageRef.current.value;
                    if (validateEmail(mail) === false) {
                        toast({
                            title: "Invalid Email",
                            description: "Please insert a valid email",
                            action: ToastAction.Error
                        });
                        return;
                    }
                    if (subject.length === 0) {
                        toast({
                            title: "Empty Subject",
                            description: "Please insert a subject",
                            action: ToastAction.Error
                        });
                        return;
                    }
                    if (message.length === 0) {
                        toast({
                            title: "Empty Message",
                            description: "Please insert a message",
                            action: ToastAction.Error
                        });
                        return;
                    }
                    closeDialog();
                    toast({
                        title: "Message Sent",
                        description: "Will get back to you soon",
                    });

                    const response = await fetch('/api/discord', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({subject, mail, message}),
                    });

                    const data = await response.json();
                    console.log(data);

                }}>Send</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>;
}