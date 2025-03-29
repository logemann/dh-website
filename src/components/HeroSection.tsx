import React from 'react';
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import Test from "@/assets/images/test.jpg"
import Logo from "@/assets/images/login_illu.jpg";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-3">
                    <div className="flex flex-col items-center text-center lg:items-start lg:col-span-2 lg:text-left">
                        <h1 className="my-6 text-pretty text-4xl font-medium lg:text-5xl font-headline">
                            Ihr Partner im vorläufigen Insolvenzverfahren
                        </h1>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            Wir bieten Ihnen professionelle Unterstützung in der Personalsachbearbeitung im
                            vorläufigen Insolvenzverfahren
                        </p>
                        <div className="flex w-full flex-col justify-center gap-6 sm:flex-row lg:justify-start">
                            <Link href="/auth/register" className={buttonVariants({ variant: "default" })}>Kunde werden</Link>
                            <Link href="/todo" className={buttonVariants({ variant: "outline" })}>Infos für Arbeitenehmer*innen</Link>
                        </div>
                    </div>
                    <Image
                        src={Test}
                        alt="MarketingCo Logo"
                        className="max-h-96 w-full rounded-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
