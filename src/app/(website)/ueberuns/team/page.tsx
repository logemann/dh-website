import {Dribbble, Github, Linkedin} from 'lucide-react';
import Image from "next/image";
import React from "react";
import {Button} from '@/components/ui/button';
import {sanityFetch} from "@/sanity/lib/fetch";
import {allTeamsQuery} from "@/sanity/lib/queries";
import {urlForImage} from "@/sanity/lib/utils";

const people = [
    {
        id: 'person-1',
        image: "jd.jpg",
        name: 'Julia Demmer',
        role: 'Geschäftsführerin',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-2',
        image: "jh.jpg",
        name: 'Jana Hoffmann',
        role: 'Geschäftsführerin',
        description: 'Elig doloremque mollitia fugiat omnis!',
    },
    {
        id: 'person-3',
        image: "jt.jpg",
        name: 'Jens Tegelkamp\n',
        role: 'Data-Management & Processing',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-4',
        image: "mh.jpg",
        name: 'Madeleine Hellebrandt',
        role: 'Junior Projektleitung',
        description: 'Elig doloremque mollitia fugiat omnis!',
    },
    {
        id: 'person-5',
        image: "avatar-m.jpg",
        name: 'Danny Hattermann',
        role: 'Junior Projektleitung',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-6',
        image: "jr.jpg",
        name: 'Jule Rotthäuser',
        role: 'Junior Projektleitung',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-7',
        image: "avatar-m.jpg",
        name: 'Raphael Hüster',
        role: 'Junior Projektleitung',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-8',
        image: "avatar-m.jpg",
        name: 'Linus Wortmann',
        role: 'Data-Management (Werkstudent)',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-10',
        image: "dl.jpg",
        name: 'Derek Lichter',
        role: 'Data-Management & Processing',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-11',
        image: "lk.jpg",
        name: 'Lucas Kuhlmann',
        role: 'Bescheinigungswesen',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-12',
        image: "lg.jpg",
        name: 'Lisa Gomez',
        role: 'Bescheinigungswesen',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-13',
        image: "mz.jpg",
        name: 'Marc Zickenheiner',
        role: 'Bescheinigungswesen',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-14',
        image: "avatar-m.jpg",
        name: 'Florian van Afferden',
        role: 'Bescheinigungswesen',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-9',
        image: "ms.jpg",
        name: 'Manuela Scholze',
        role: 'Buchhaltung und Personalwesen',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-15',
        image: "ym.jpg",
        name: 'Yvonne Müller',
        role: 'Bescheinigungswesen',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
    {
        id: 'person-16',
        image: "bruno.jpg",
        name: 'Bruno',
        role: 'Feel-Good-Manager',
        description:
            'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    },
];

export default async function Page() {
    const data = await sanityFetch({query: allTeamsQuery});
    return (
        <>
            <section className="py-16">
                <div className="container flex flex-col items-start text-left">
                    <p className="semibold">Wir stellen ein!</p>
                    <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
                        Lerne unser Team kennen
                    </h2>
                    <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">Unser Team steht für Innovation,
                        Zusammenarbeit und Leidenschaft. Mit unterschiedlichen Talenten und einem gemeinsamen Ziel
                        arbeiten
                        wir daran, kreative Lösungen zu entwickeln und Ideen in die Tat umzusetzen. Gemeinsam gestalten
                        wir
                        die Zukunft – mit Engagement, Expertise und Teamgeist.</p>
                </div>
                <div className="container mt-16 grid gap-x-12 gap-y-8 lg:grid-cols-2">
                    {data.map((person) => {
                        //const { image: source, priority } = person.picture;
                        return (
                            <div key={person._id} className="flex flex-col sm:flex-row">
                                <div
                                    className="mb-4 aspect-square w-full shrink-0 text-clip bg-accent sm:mb-0 sm:mr-5 sm:size-48">
                                    <Image
                                        src={urlForImage(person.picture)?.height(512).width(512).url() as string}
                                        alt={"todo"}
                                        width={512}
                                        height={512}
                                        //priority={priority}
                                        className="max-h-96 w-full h-full rounded-md object-cover"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col items-start">
                                    <p className="w-full text-left font-medium">{person.name}</p>
                                    <p className="w-full text-left font text-sm">({person.abschluss})</p>
                                    <p className="w-full text-left text-muted-foreground">
                                        {person.jobtitle}
                                    </p>
                                    <p className="w-full py-2 text-sm text-muted-foreground">
                                        {person.workarea}
                                    </p>
                                    <div className="my-2 flex items-start gap-4">
                                        <a href="#">
                                            <Github className="size-4 text-muted-foreground"/>
                                        </a>
                                        <a href="#">
                                            <Linkedin className="size-4 text-muted-foreground"/>
                                        </a>
                                        <a href="#">
                                            <Dribbble className="size-4 text-muted-foreground"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="py-8">
                <div className="container">
                    <div
                        className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
                        <div className="flex-1">
                            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                                Wir stellen ein!
                            </h3>
                            <p className="text-muted-foreground lg:text-lg">Du suchst nach einer spannenden
                                Herausforderung in einem dynamischen und freundlichen Team? Dann bist du bei uns genau
                                richtig! Wir sind auf der Suche nach motivierten und talentierten Menschen, die mit uns
                                gemeinsam die Zukunft gestalten möchten</p>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 shrink-0 flex-col gap-4 sm:flex-row">
                            <Button variant="outline">Alle Positionen</Button>
                            <Button>Direkt zur Bewerbung</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
