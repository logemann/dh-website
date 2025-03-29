import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";

const Hero2Section = () => {
    return (
        <section className="overflow-hidden py-32">
            <div className="container">
                <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
                    <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                        <h1 className="text-pretty text-4xl font-bold lg:max-w-md lg:text-7xl">
                            Ihr <span className="text-black bg-[#d1ffab] px-2 py-0.2">Partner</span> im vorläufigen Insolvenzverfahren
                        </h1>
                        <p className="max-w-xl text-xl font-medium lg:text-2xl">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="flex w-full justify-center lg:justify-start">
                            <Button className="w-full sm:w-auto" size="lg">
                                <Download className="mr-2 size-5" />
                                Primary Button
                            </Button>
                        </div>
                    </div>
                    <img
                        src="https://shadcnblocks.com/images/block/placeholder-aspect-video-1.svg"
                        alt="placeholder hero"
                        className="aspect-video rounded-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero2Section;
