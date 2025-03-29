"use client";
import {Book, Menu, Sunset, Trees, Zap, Users, Building2, Rocket} from 'lucide-react';
import Image from 'next/image'
import Logo from "@/assets/images/logo_dh.png"
import Logo2 from "@/assets/images/dh_symbol.png"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {Button, buttonVariants} from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {cn} from '@/lib/utils';
import Link from "next/link";
import React, {use} from "react";
import {ThemedComponent} from "@/app/(website)/ThemeComponent";
import {ThemeContext} from "@/app/(website)/ThemeProvider";

const subMenuItemsOne = [
    {
        title: 'Firma',
        href: "/aboutus",
        description: 'Die DH stellt sich vor',
        icon: <Building2 className="size-5 shrink-0"/>,
    },
    {
        title: 'Team',
        href: "/ueberuns/team",
        description: 'Unsere Stärke ist unser Team.',
        icon: <Users className="size-5 shrink-0"/>,
    },
    {
        title: 'Karriere',
        href: "/ueberuns/karriere",
        description: 'Karrieremöglichkeiten bei der DH.',
        icon: <Rocket className="size-5 shrink-0"/>,
    },
];

const subMenuItemsTwo = [
    {
        title: 'Help Center',
        href: "/help",
        description: 'Get all the answers you need right here',
        icon: <Zap className="size-5 shrink-0"/>,
    },
    {
        title: 'Contact Us',
        href: "/kontakt",
        description: 'We are here to help you with any questions you have',
        icon: <Sunset className="size-5 shrink-0"/>,
    },
    {
        title: 'Status',
        href: "/status",
        description: 'Check the current status of our services and APIs',
        icon: <Trees className="size-5 shrink-0"/>,
    },
    {
        title: 'Terms of Service',
        href: "/terms",
        description: 'Our terms and conditions for using our services',
        icon: <Book className="size-5 shrink-0"/>,
    },
];

export default function Navigation() {
    const { theme} = use(ThemeContext)!;

    return <>
        <nav className="hidden justify-between md:flex bg-white">
            <div className="flex items-center lg:gap-24 gap-8 md:gap-4">
                <div className="items-center">
                    <Image
                        src={theme.mode === "light"? Logo : Logo2}
                        alt="MarketingCo Logo"
                        width={92}
                        height={92}
                        className="mr-2 p-2"
                    />
                </div>
                <div className="flex items-center">
                    <Link
                        className={cn(
                            'text-muted-foreground',
                            navigationMenuTriggerStyle,
                            buttonVariants({
                                variant: 'ghost',
                            }),
                        )}
                        href="/"
                    >
                        Home
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem className="hidden lg:block text-muted-foreground">
                                <NavigationMenuTrigger>
                                    <span>Über uns</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-80 p-3">
                                        {subMenuItemsOne.map((item, idx) => (
                                            <li key={idx}>
                                                <Link
                                                    className={cn(
                                                        'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                    )}
                                                    href={item.href}
                                                >
                                                    {item.icon}
                                                    <div>
                                                        <div className="text-sm font-semibold">
                                                            {item.title}
                                                        </div>
                                                        <p className="text-sm leading-snug text-muted-foreground">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="text-muted-foreground">
                                <NavigationMenuTrigger>Leistungen</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-80 p-3">
                                            {subMenuItemsTwo.map((item, idx) => (
                                                <li key={idx}>
                                                    <Link
                                                        className={cn(
                                                            'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                        )}
                                                        href={item.href}
                                                    >
                                                        {item.icon}
                                                        <div>
                                                            <div className="text-sm font-semibold">
                                                                {item.title}
                                                            </div>
                                                            <p className="text-sm leading-snug text-muted-foreground">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Link
                        className={cn(
                            'text-muted-foreground',
                            navigationMenuTriggerStyle,
                            buttonVariants({
                                variant: 'ghost',
                            }),
                        )}
                        href="/kontakt"
                    >
                        Kontakt
                    </Link>
                    <Link
                        className={cn(
                            'text-muted-foreground',
                            navigationMenuTriggerStyle,
                            buttonVariants({
                                variant: 'ghost',
                            }),
                        )}
                        href="/blog"
                    >
                        Blog
                    </Link>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <ThemedComponent/>
                <Link href="/auth/login" className={buttonVariants({ variant: "secondary" })}>Login</Link>
            </div>
        </nav>
        <div className="block md:hidden px-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                        src={Logo}
                        alt="MarketingCo Logo"
                        width={74}
                        height={74}
                        className=""
                    />
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={'outline'} size={'icon'}>
                            <Menu className="size-4"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="https://www.shadcnblocks.com/images/block/block-1.svg"
                                        className="w-8"
                                        alt="logo"
                                    />
                                    <span className="text-xl font-bold">Shadcn Blocks</span>
                                </div>
                            </SheetTitle>
                        </SheetHeader>
                        <div className="my-8 flex flex-col gap-4">
                            <a href="#" className="font-semibold">
                                Home
                            </a>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="products" className="border-b-0">
                                    <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                                        Products
                                    </AccordionTrigger>
                                    <AccordionContent className="mt-2">
                                        {subMenuItemsOne.map((item, idx) => (
                                            <a
                                                key={idx}
                                                className={cn(
                                                    'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                )}
                                                href="#"
                                            >
                                                {item.icon}
                                                <div>
                                                    <div className="text-sm font-semibold">
                                                        {item.title}
                                                    </div>
                                                    <p className="text-sm leading-snug text-muted-foreground">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="resources" className="border-b-0">
                                    <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                                        Resources
                                    </AccordionTrigger>
                                    <AccordionContent className="mt-2">
                                        {subMenuItemsTwo.map((item, idx) => (
                                            <a
                                                key={idx}
                                                className={cn(
                                                    'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                )}
                                                href="#"
                                            >
                                                {item.icon}
                                                <div>
                                                    <div className="text-sm font-semibold">
                                                        {item.title}
                                                    </div>
                                                    <p className="text-sm leading-snug text-muted-foreground">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <a href="#" className="font-semibold">
                                Pricing
                            </a>
                            <a href="#" className="font-semibold">
                                Blog
                            </a>
                        </div>
                        <div className="border-t pt-4">
                            <div className="grid grid-cols-2 justify-start">
                                <a
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                        }),
                                        'justify-start text-muted-foreground',
                                    )}
                                    href="#"
                                >
                                    Press
                                </a>
                                <a
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                        }),
                                        'justify-start text-muted-foreground',
                                    )}
                                    href="#"
                                >
                                    Contact
                                </a>
                                <a
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                        }),
                                        'justify-start text-muted-foreground',
                                    )}
                                    href="#"
                                >
                                    Imprint
                                </a>
                                <a
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                        }),
                                        'justify-start text-muted-foreground',
                                    )}
                                    href="#"
                                >
                                    Sitemap
                                </a>
                                <a
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                        }),
                                        'justify-start text-muted-foreground',
                                    )}
                                    href="#"
                                >
                                    Legal
                                </a>
                                <a
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                        }),
                                        'justify-start text-muted-foreground',
                                    )}
                                    href="#"
                                >
                                    Cookie Settings
                                </a>
                            </div>
                            <div className="mt-2 flex flex-col gap-3">
                                <Button variant={'outline'}>Log in</Button>
                                <Button>Sign up</Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </>
}

