import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
    return (
        <section className="py-16">
            <div className="container">
                <div className="mx-auto flex  flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                    <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                                Kontaktieren Sie uns
                            </h1>
                            <p className="text-muted-foreground">
                                Wir sind für Fragen, Feedback oder Kooperationen offen und würden uns freuen
                                mit Ihnen ins Gespräch zu kommen. Lassen Sie es uns über das Formular wissen.
                            </p>
                        </div>
                        <div className="mx-auto w-fit lg:mx-0">
                            <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                                Kontakt Details
                            </h3>
                            <ul className="ml-4 list-disc">
                                <li>
                                    <span className="font-bold">Telefon: </span>
                                    (123) 34567890
                                </li>
                                <li>
                                    <span className="font-bold">E-Mail: </span>
                                    <a href="" className="underline">
                                        your-email@example.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
                        <div className="flex gap-4">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="firstname">Vorname</Label>
                                <Input type="text" id="firstname" placeholder="Vorname"/>
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="lastname">Nachname</Label>
                                <Input type="text" id="lastname" placeholder="Nachname"/>
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="company">Firma</Label>
                            <Input type="company" id="company" placeholder="Firma"/>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="E-Mail"/>
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="message">Nachricht</Label>
                            <Textarea placeholder="Schreiben Sie hier Ihre Nachricht..." id="message"/>
                        </div>
                        <Button className="w-full">Nachricht senden</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
