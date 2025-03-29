import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Logo from "@/assets/images/logo_dh.png";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import React from "react";

export const metadata = {
    title: 'Marketing Website',
    description: 'A marketing website with login and dashboard',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className="py-6 sm:px-6 lg:px-8 mx-4 lg:mx-32 md:mx-24 sm:mx-16">
            <div className="flex justify-between">
                <Image
                    src={Logo}
                    alt="MarketingCo Logo"
                    width={92}
                    height={92}
                    className="mr-2 p-2"
                />
                <div>
                    <Link href="/" className={buttonVariants({ variant: "outline" })}>&lt;&lt; Zurück zur Homepage</Link>
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}

