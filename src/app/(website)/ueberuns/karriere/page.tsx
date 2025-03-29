import {ArrowRight} from 'lucide-react';
import KarriereCta from "@/components/cta/KarriereCta";

const departments = [
    {
        title: 'Sales',
        roles: [
            {
                id: 'role-1',
                title: 'Sales Manager',
                location: 'London',
                href: '#',
            },
            {
                id: 'role-2',
                title: 'Sales Development Representative',
                location: 'London',
                href: '#',
            },
            {
                id: 'role-3',
                title: 'Sales Manager',
                location: 'London',
                href: '#',
            },
        ],
    },
    {
        title: 'Customer Success',
        roles: [
            {
                id: 'role-4',
                title: 'Customer Success Associate',
                location: 'London',
                href: '#',
            },
        ],
    },
];

const Careers1 = () => {
    return (
        <section className="py-16">
            <div className="container">
                <div className="container flex flex-col items-start text-left">
                    <p className="semibold">Jetzt durchstarten!</p>
                    <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">Deine Karriere bei uns</h2>
                    <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
                        Du möchtest Teil eines dynamischen Teams werden, in dem Innovation, Teamgeist und persönliche
                        Entwicklung großgeschrieben werden? Bei uns findest du nicht nur spannende Herausforderungen,
                        sondern auch ein Umfeld, das dich fördert und inspiriert. Entdecke deine Möglichkeiten – wir
                        freuen uns darauf, dich kennenzulernen!
                    </p>
                </div>
                {departments.map((department) => (
                    <div key={department.title} className="mt-12 md:mt-20">
                        <h3 className="mb-8 text-3xl font-medium md:text-4xl">
                            {department.title}
                        </h3>
                        <ul className="divide-y divide-border border-y border-border">
                            {department.roles.map((role) => (
                                <li key={role.id} className="group">
                                    <a href={role.href} className="flex items-center py-6">
                                        <div>
                                            <div className="font-medium md:text-lg">{role.title}</div>
                                            <div className="text-xs text-muted-foreground md:mt-2 md:text-sm">
                                                {role.location}
                                            </div>
                                        </div>
                                        <ArrowRight
                                            className="ml-auto size-6 -translate-x-6 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="align-middle">
                <KarriereCta/>
            </div>
        </section>
    );
};

export default Careers1;
