'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const data = [
    {
        id: 'item-1',
        title: 'Vorfinanzierung',
        description:
            'Wir helfen bei den Prozessen rund um die Vorfinanzierung des Insolvenzgeldes.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-1.svg',
    },
    {
        id: 'item-2',
        title: 'Arbeitnehmerbetreuung',
        description:
            'Wir betreuen die Arbeitnehmer*innen und stehen als Ansprechpartner*innen zur Verfügung.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-2.svg',
    },
    {
        id: 'item-3',
        title: 'Differenzlohn',
        description:
            'Wir berechnen die Differenzlohnansprüche der jeweiligen Mitarbeiter unter Beachtung der persönlichen Besonderheiten.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-3.svg',
    },
    {
        id: 'item-4',
        title: 'Bescheinigungswesen',
        description:
            'Wir prüfen die insolvenzgeldfähigen Lohnabrechnungen und erstellen die notwendigen Arbeitnehmerdokumente.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-4.svg',
    },
    {
        id: 'item-5',
        title: 'Tabellenforderung',
        description:
            'Wir kontrollieren die angemeldeten Forderungen zur Insolvenztabelle.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-5.svg',
    },
    {
        id: 'item-6',
        title: 'Unternehmensfortführung',
        description:
            'Wir steuern das Personalwesen und die Fortführungslöhne im eröffneten Insolvenzverfahren.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-5.svg',
    },
];

const Gallery5 = () => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [selection, setSelection] = useState(0);
    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        carouselApi.scrollTo(selection);
    }, [carouselApi, selection]);
    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
            setSelection(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on('select', updateSelection);
        return () => {
            carouselApi.off('select', updateSelection);
        };
    }, [carouselApi]);
    return (
        <section className="py-16">
            <div className="container mb-14 flex flex-col gap-16 lg:mb-16">
                <div className="w-full border-0">
                    <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6 w-full py-4">
                        <p className="font-bold text-4xl justify-self-center font-headline">
                            Unsere
                            <span
                                className="text-[#45818A] mx-1 font-extrabold text-4xl relative inline-block stroke-current">
                                    Leistungen
                                    <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                         preserveAspectRatio="none">
                                        <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                                    </svg>
                            </span>
                            für Sie
                        </p>
                    </h2>

                    <p className="text-muted-foreground lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                        doloremque mollitia fugiat omnis! Porro facilis quo animi
                        consequatur. Explicabo.
                    </p>
                </div>
                <div className="flex shrink-0 justify-center gap-2 md:hidden">
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => {
                            carouselApi?.scrollPrev();
                        }}
                        disabled={!canScrollPrev}
                        className="disabled:pointer-events-auto"
                    >
                        <ArrowLeft className="size-5" />
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => {
                            carouselApi?.scrollNext();
                        }}
                        disabled={!canScrollNext}
                        className="disabled:pointer-events-auto"
                    >
                        <ArrowRight className="size-5" />
                    </Button>
                </div>
                <div className="hidden items-center justify-center space-x-4 space-y-4 text-center md:flex md:flex-wrap">
                    <ToggleGroup
                        type="single"
                        variant="outline"
                        size="lg"
                        className="flex-wrap gap-4"
                        value={data[selection].id}
                        onValueChange={(newValue) => {
                            if (newValue) {
                                setSelection(data.findIndex((item) => item.id === newValue));
                            }
                        }}
                    >
                        {data.map((item) => (
                            <ToggleGroupItem key={item.id} value={item.id}>
                                {item.title}
                            </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            '(max-width: 768px)': {
                                dragFree: true,
                            },
                        },
                    }}
                >
                    <CarouselContent className="ml-[calc(theme(container.padding)-40px)] mr-[calc(theme(container.padding))] lg:ml-[calc(200px-40px)] lg:mr-[200px] 2xl:ml-[calc(50vw-700px+200px-40px)] 2xl:mr-[calc(50vw-700px+200px)]">
                        {data.map((item) => (
                            <CarouselItem key={item.id} className="pl-[40px]">
                                <a href={item.href} className="group rounded-xl">
                                    <div className="flex flex-col text-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                                        <div className="md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="aspect-[16/9] size-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center px-4 py-8 md:py-10 lg:py-12">
                                            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6 font-headline">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground lg:text-lg">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default Gallery5;
