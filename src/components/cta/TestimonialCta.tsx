import {Avatar, AvatarImage} from '@/components/ui/avatar';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import myImage from "@/assets/images/speaker.png"
import Image from "next/image";

const TestimonialCta = () => {
    return (
        <section className="py-32">
            <div className="container">
                <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6 w-full py-4 pb-12">
                    <p className="font-bold text-4xl justify-self-center">
                        Das sagen
                        <span
                            className="text-[#40B7C9] mx-1 font-extrabold text-4xl relative inline-block stroke-current">
                                    Kunden und Partner
                                    <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5"
                                         xmlns="http://www.w3.org/2000/svg"
                                         preserveAspectRatio="none">
                                        <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                                              strokeWidth="2"></path>
                                    </svg>
                            </span>
                        über uns
                    </p>
                </h2>
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
                        <Image
                            src={myImage}
                            alt="Testimonials"
                            className="h-72 w-full rounded-md object-cover lg:h-auto"
                        />
                        <Card className="col-span-2 flex items-center justify-center p-6">
                            <div className="flex flex-col gap-4">
                                <q className="text-xl font-medium lg:text-3xl font-handwriting">
                                    Die Zusammenarbeit mit der DH Personalsachbearbeitung GmbH war hervorragend. Der
                                    Service war professionell, zuverlässig und hat unsere Erwartungen übertroffen. Ich
                                    kann das Unternehmen wärmstens weiterempfehlen!
                                </q>
                                <div className="flex flex-col items-start">
                                    <p className="font-medium">John Whick</p>
                                    <p className="text-muted-foreground">Partner, Summa Consult Part.GmbH</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <Card>
                            <CardContent className="px-6 pt-6 leading-7 text-foreground/70">
                                <q className="font-handwriting text-xl">Die DH Personalsachbearbeitung GmbH überzeugt durch eine unglaubliche Erreichbarkeit.
                                    Egal zu welcher Zeit, wir konnten uns stets auf schnelle Rückmeldungen und
                                    kompetente Unterstützung verlassen. Ein wirklich herausragender Service!</q>
                            </CardContent>
                            <CardFooter>
                                <div className="flex gap-4 leading-5">
                                    <Avatar className="size-9 rounded-full ring-1 ring-input">
                                        <AvatarImage
                                            src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                                            alt="placeholder"
                                        />
                                    </Avatar>
                                    <div className="text-sm">
                                        <p className="font-medium font-">John Doe</p>
                                        <p className="text-muted-foreground">CEO, Company Name</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardContent className="px-6 pt-6 leading-7 text-foreground/70">
                                <q className="font-handwriting text-xl">
                                    Die DH Personalsachbearbeitung GmbH hat uns insbesondere beim komplexen
                                    Bescheinigungswesen in der Insolvenz hervorragend unterstützt. Dank ihrer Expertise
                                    und Präzision verlief alles reibungslos. Ein verlässlicher Partner in
                                    herausfordernden Zeiten!
                                </q>
                            </CardContent>
                            <CardFooter>
                                <div className="flex gap-4 leading-5">
                                    <Avatar className="size-9 rounded-full ring-1 ring-input">
                                        <AvatarImage
                                            src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                                            alt="placeholder"
                                        />
                                    </Avatar>
                                    <div className="text-sm">
                                        <p className="font-medium">John Doe</p>
                                        <p className="text-muted-foreground">CEO, Company Name</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardContent className="px-6 pt-6 leading-7 text-foreground/70">
                                <q className="font-handwriting text-xl">
                                    Die DH Personalsachbearbeitung GmbH hat uns mit ihrem herausragenden Fachwissen im
                                    Bereich der Insolvenz-Lohnbuchhaltung umfassend unterstützt. Durch ihre
                                    professionelle und präzise Arbeitsweise wurden sämtliche Anforderungen zuverlässig
                                    erfüllt. Ein äußerst kompetenter und vertrauenswürdiger Partner in diesem
                                    Spezialgebiet.
                                </q>
                            </CardContent>
                            <CardFooter>
                                <div className="flex gap-4 leading-5">
                                    <Avatar className="size-9 rounded-full ring-1 ring-input">
                                        <AvatarImage
                                            src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                                            alt="placeholder"
                                        />
                                    </Avatar>
                                    <div className="text-sm">
                                        <p className="font-medium">John Doe</p>
                                        <p className="text-muted-foreground">CEO, Company Name</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCta;
