import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { sanityFetch } from "@/sanity/lib/fetch";
import { allStoriesQuery } from "@/sanity/lib/queries";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import CoverImage from "@/app/(website)/blog/cover-image";
import DateComponent from "@/app/(website)/blog/date";
import {defineQuery} from "next-sanity";

const posts = [
    {
        id: 'post-1',
        title: 'Feier: 3 Jahre DH Personalsachbearbeitung',
        summary:
            'Wir wollten es uns am 18.01.2025 nicht nehmen lassen und den 3. Geburtstag von DH mit Kunden, Partner und' +
            'unserem ganzen Team zu feiern.',
        label: 'DH intern',
        author: 'Jana Hoffmann',
        published: '21 Jan 2025',
        href: '#',
        image: 'http://localhost:3001/images/baloon.jpg',
    },
    {
        id: 'post-2',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        label: 'Ut varius dolor turpis',
        author: 'Jane Doe',
        published: '1 Jan 2024',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'post-3',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        label: 'Ut varius dolor turpis',
        author: 'Jane Doe',
        published: '1 Jan 2024',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'post-4',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        label: 'Ut varius dolor turpis',
        author: 'Jane Doe',
        published: '1 Jan 2024',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'post-5',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        label: 'Ut varius dolor turpis',
        author: 'Jane Doe',
        published: '1 Jan 2024',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'post-6',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        label: 'Ut varius dolor turpis',
        author: 'Jane Doe',
        published: '1 Jan 2024',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'post-7',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        label: 'Ut varius dolor turpis',
        author: 'Jane Doe',
        published: '1 Jan 2024',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'post-8',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        label: 'Ut varius dolor turpis',
        author: 'Jane Doe',
        published: '1 Jan 2024',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'post-9',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        label: 'Ut varius dolor turpis',
        author: 'Jane Doe',
        published: '1 Jan 2024',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
];

export default async function Page() {
    const data = await sanityFetch({ query: allStoriesQuery });
    return (
        <section className="py-16">
            <div className="container">
                <div className="mb-8 md:mb-14 lg:mb-16">
                    <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
                        DH Magazin
                    </h1>
                    <p>Wissenswert · Interessant · Aktuell </p>
                </div>
                <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
                    {data?.map((post) => (
                        <a key={post._id} href={`/posts/${post.slug}`} className="group flex flex-col">
                            <div className="mb-4 flex text-clip rounded-xl md:mb-5">
                                <div className="size-full transition duration-300 group-hover:scale-105">
                                    <CoverImage image={post.coverImage} priority={false}  />
                                    {/*<img
                                        src={post.image}
                                        alt={post.title}
                                        className="aspect-[3/2] size-full object-cover object-center"
                                    />*/}
                                </div>
                            </div>

                            <div>
                                <Badge>No Label yet</Badge>
                            </div>
                            <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
                                {post.title}
                            </div>
                            <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
                                {post.excerpt}
                            </div>
                            <div className="flex items-center gap-2">
                                <Avatar className="size-12">
                                    <AvatarImage src="https://www.shadcnblocks.com/images/block/avatar-1.webp" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col gap-px">
                                    <span className="text-xs font-medium">{post.author?.name}</span>
                                    <span className="text-xs text-muted-foreground">
                   <DateComponent dateString={post.date} />
                  </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="mt-8 border-t border-border py-2 md:mt-10 lg:mt-12">
                    <Pagination>
                        <PaginationContent className="w-full justify-between">
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <div className="hidden items-center gap-1 md:flex">
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                            </div>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </section>
    );
};
