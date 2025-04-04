"use client";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from "next/image";
import Logo from "@/assets/images/logo_dh.png";
import {use} from "react";
import {ThemeContext} from "@/app/(website)/ThemeProvider";
import Logo2 from "@/assets/images/dh_symbol.png";

const sections = [
    {
        title: 'Product',
        links: [
            { name: 'Overview', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Marketplace', href: '#' },
            { name: 'Features', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About', href: '#' },
            { name: 'Team', href: '/ueberuns/team' },
            { name: 'Blog', href: '#' },
            { name: 'Careers', href: '/ueberuns/karriere' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'Help', href: '#' },
            { name: 'Sales', href: '#' },
            { name: 'Advertise', href: '#' },
            { name: 'Privacy', href: '#' },
        ],
    },
];
export default function Footer() {
    const { theme} = use(ThemeContext)!;
    return (
        <section className="py-32">
            <div className="container">
                <footer>
                    <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
                        <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-20 lg:items-start">
                            <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                   <Image
                       src={theme.mode === "light"? Logo : Logo2}
                       alt="MarketingCo Logo"
                       width={74}
                       height={74}
                       className=""
                   />
                </span>
                                <p className="mt-6 text-sm text-muted-foreground">
                                    A collection of 100+ responsive HTML templates for your
                                    startup business or side project.
                                </p>
                            </div>
                            <ul className="flex items-center space-x-6 text-muted-foreground">
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaInstagram className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaFacebook className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaTwitter className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">
                                        <FaLinkedin className="size-6" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-3 gap-6 lg:gap-20">
                            {sections.map((section, sectionIdx) => (
                                <div key={sectionIdx}>
                                    <h3 className="mb-6 font-bold">{section.title}</h3>
                                    <ul className="space-y-4 text-sm text-muted-foreground">
                                        {section.links.map((link, linkIdx) => (
                                            <li
                                                key={linkIdx}
                                                className="font-medium hover:text-primary"
                                            >
                                                <a href={link.href}>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
                        <p>© 2024 Shadcnblocks. All rights reserved.</p>
                        <ul className="flex justify-center gap-4 lg:justify-start">
                            <li className="hover:text-primary">
                                <a href="#"> Terms and Conditions</a>
                            </li>
                            <li className="hover:text-primary">
                                <a href="#"> Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};
