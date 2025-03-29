import {Lightbulb, ListChecks, MessageCircleMore} from 'lucide-react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

const FeatureSection = () => {
    return (
        <div className="py-16">
            <Tabs defaultValue="feature-1">
                <TabsList
                    className="grid grid-cols-1 auto-rows-max md:grid-cols-2 lg:grid-cols-3 h-auto  gap-2
                            bg-background [&>button[data-state=active]_span]:bg-[#d1ffab]">
                    <TabsTrigger
                        value="feature-1"
                        className="flex w-full h-full flex-col items-start justify-start gap-1 whitespace-normal
                                    rounded-md border p-4 text-left text-primary hover:border-primary/40
                                    data-[state=active]:border-primary"
                    >
                        <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                            <span className="flex size-8 items-center justify-center rounded-full bg-accent
                                            lg:size-10">
                              <MessageCircleMore className="size-4 text-primary"/>
                            </span>
                            <p className="text-lg font-semibold md:text-2xl lg:text-lg font-headline">
                                Vorfinanzierung
                            </p>
                        </div>
                        <p className="font-normal text-muted-foreground md:block">
                            Wir helfen bei den Prozessen rund um die Vorfinanzierung des Insolvenzgelds.
                        </p>
                    </TabsTrigger>
                    <TabsTrigger
                        value="feature-2"
                        className="flex w-full h-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md
                                    border p-4 text-left text-primary hover:border-primary/40
                                    data-[state=active]:border-primary"
                    >
                        <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                            <span className="flex size-8 items-center justify-center rounded-full lg:size-10
                            ">
                              <MessageCircleMore className="size-4 text-primary"/>
                            </span>
                            <p className="text-lg font-semibold md:text-2xl lg:text-lg">
                                Arbeitnehmerbetreuung
                            </p>
                        </div>
                        <p className="font-normal text-muted-foreground md:block">
                            Wir betreuen die Arbeitnehmer*innen und stehen als Ansprechpartner*innen zur Verfügung.
                        </p>
                    </TabsTrigger>
                    <TabsTrigger
                        value="feature-3"
                        className="flex w-full h-full flex-col items-start justify-start gap-1 whitespace-normal
                                    rounded-md border p-4 text-left text-primary hover:border-primary/40
                                    data-[state=active]:border-primary"
                    >
                        <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                            <span className="flex size-8 items-center justify-center rounded-full
                                            bg-accent lg:size-10">
                              <Lightbulb className="size-4 text-primary"/>
                            </span>
                            <p className="text-lg font-semibold md:text-2xl lg:text-lg">
                                Differenzlohn
                            </p>
                        </div>
                        <p className="font-normal text-muted-foreground md:block">
                            Wir berechnen die Differenzlohnansprüche der jeweiligen Mitarbeiter unter Beachtung der
                            persönlichen Besonderheiten.
                        </p>
                    </TabsTrigger>
                    <TabsTrigger
                        value="feature-4"
                        className="flex w-full h-full flex-col items-start justify-start gap-1 whitespace-normal
                                    rounded-md border p-4 text-left text-primary hover:border-primary/40
                                    data-[state=active]:border-primary"
                    >
                        <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                        <span className="flex size-8 items-center justify-center rounded-full bg-accent
                                        lg:size-10">
                          <ListChecks className="size-4 text-primary"/>
                        </span>
                            <p className="text-lg font-semibold md:text-2xl lg:text-lg">
                                Bescheinigungswesen
                            </p>
                        </div>
                        <p className="font-normal text-muted-foreground md:block">
                            Wir steuern das Personalwesen und die Fortführungslöhne im eröffneten Insolvenzverfahren.
                        </p>
                    </TabsTrigger>
                    <TabsTrigger
                        value="feature-5"
                        className="flex w-full h-full flex-col items-start justify-start gap-1 whitespace-normal
                                    rounded-md border p-4 text-left text-primary hover:border-primary/40
                                    data-[state=active]:border-primary"
                    >
                        <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                        <span className="flex size-8 items-center justify-center rounded-full bg-accent
                                    lg:size-10 ">
                          <ListChecks className="size-4 text-primary"/>
                        </span>
                            <p className="text-lg font-semibold md:text-2xl lg:text-lg">
                                Tabellenforderung
                            </p>
                        </div>
                        <p className="font-normal text-muted-foreground md:block">
                            Wir steuern das Personalwesen und die Fortführungslöhne im eröffneten Insolvenzverfahren.
                        </p>
                    </TabsTrigger>
                    <TabsTrigger
                        value="feature-6"
                        className="flex w-full h-full flex-col items-start justify-start gap-1 whitespace-normal
                                        rounded-md border p-4 text-left text-primary hover:border-primary/40
                                        data-[state=active]:border-primary"
                    >
                        <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                        <span className="flex size-8 items-center justify-center rounded-full bg-accent
                                            lg:size-10">
                          <ListChecks className="size-4 text-primary"/>
                        </span>
                            <p className="text-lg font-semibold md:text-2xl lg:text-lg">
                                Unternehmens-<br/>fortführung
                            </p>
                        </div>
                        <p className="font-normal text-muted-foreground md:block">
                            Wir steuern das Personalwesen und die Fortführungslöhne im eröffneten Insolvenzverfahren.
                        </p>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="feature-1">
                    <img
                        src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                        alt=""
                        className="aspect-video rounded-md object-cover"
                    />
                </TabsContent>
                <TabsContent value="feature-2">
                    <img
                        src="https://www.shadcnblocks.com/images/block/placeholder-2.svg"
                        alt=""
                        className="aspect-video rounded-md object-cover"
                    />
                </TabsContent>
                <TabsContent value="feature-3">
                    <img
                        src="https://www.shadcnblocks.com/images/block/placeholder-3.svg"
                        alt=""
                        className="aspect-video rounded-md object-cover"
                    />
                </TabsContent>
                <TabsContent value="feature-4">
                    <img
                        src="https://www.shadcnblocks.com/images/block/placeholder-2.svg"
                        alt=""
                        className="aspect-video rounded-md object-cover"
                    />
                </TabsContent>
                <TabsContent value="feature-5">
                    <img
                        src="https://www.shadcnblocks.com/images/block/placeholder-3.svg"
                        alt=""
                        className="aspect-video rounded-md object-cover"
                    />
                </TabsContent>
                <TabsContent value="feature-6">
                    <img
                        src="https://www.shadcnblocks.com/images/block/placeholder-3.svg"
                        alt=""
                        className="aspect-video rounded-md object-cover"
                    />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default FeatureSection;
