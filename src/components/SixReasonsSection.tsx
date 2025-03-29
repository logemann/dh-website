import {BatteryCharging, BatteryFull, GraduationCap, Medal, PencilRuler, ScanQrCode} from "lucide-react";

const reasons = [
    {
        title: 'Umfassende Erfahrung',
        description:
            'Wir verfügen über umfassende Expertise in der Insolvenzgeldvorfinanzierung. Unser Team ist vertraut mit der Betreuung von klein- bis mittelständischen Betrieben sowie Großunternehmen verschiedenster Fachbereiche. ',
        icon: <PencilRuler className="size-6"/>,
    },
    {
        title: 'Junges und dynamisches Team',
        description:
            'Neben der Vollzeitbeschäftigung noch ein Masterstudium? Das war für uns kein Problem! Als junges und dynamisches Team überzeugen wir vor allem mit viel Ausdauer, einem starken Willen und frischem Wind in der Branche.',
        icon: <BatteryFull className="size-6"/>,
    },
    {
        title: '100% digital',
        description:
            'Die DH ist der Konkurrenz vorraus. Mit dem webbasierten DH-Portal bieten wir nicht nur einen Mehrwert für Verwalter und Unternehmen, sondern unterstüzuen alle Parteien in jedem Prozess innerhalb der Involvenzperiode.',
        icon: <ScanQrCode className="size-6"/>,
    },
    {
        title: 'hohes Fachwissen',
        description:
            'Sowohl beruflich als auch wissenschaftlich sind wir mit der Gesetzeslage umfassend vertraut. Insbesondere durch die Covid-19-Pandemie und die damit verbundene außergewöhnliche Situation für Unternehmen ändert sich die gesetzliche Grundlage ständig',
        icon: <GraduationCap className="size-6"/>,
    },
    {
        title: 'Förderung und Weiterbildung',
        description:
            'Der Besuch von Fachkonferenzen und Weiterbildungen sichert ständigen Fortschritt in unserer beruflichen Praxis. Dadurch bleiben wir stets offen für neues Wissen und neue Erfahrungen. So bieten wir auch unseren Mitarbeiter*innen individuelle Weiterbildungsmöglichkeiten und hohe Entwicklungspotenziale.',
        icon: <Medal className="size-6"/>,
    },
    {
        title: 'Nochwas tolles',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat Saepe est aliquid exercitationem, quos explicabo repellat exercitationem, quos explicabo repellat quos explicabo repellat.',
        icon: <BatteryCharging className="size-6"/>,
    },
];

import React from 'react';

export default function SixReasonsSection() {
    return (
        <section className="p-28 bg-[#eee] mt-32">
            <div className="container">
                <div className="mb-10 md:mb-20">
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
                        Warum die DH der richtige Partner ist.
                    </h2>
                </div>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                                {reason.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                            <p className="text-muted-foreground">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


