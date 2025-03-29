import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {ThemeProvider} from "@/app/(website)/ThemeProvider";

export const metadata = {
    title: 'Marketing Website',
    description: 'A marketing website with login and dashboard',
}

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode,
}) {


    return (
        <ThemeProvider>
            <div className="py-6 sm:px-6 lg:px-8 mx-4 lg:mx-32 md:mx-24 sm:mx-16">
                <Navigation/>
                <main>
                    {children}</main>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

