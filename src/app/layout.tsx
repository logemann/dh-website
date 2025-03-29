import './globals.css'
//import Providers from "@/components/Providers";
import React from "react";
import {Metadata} from "next";
import {Inter, Lexend, Roboto_Serif, Edu_NSW_ACT_Foundation} from "next/font/google";
import clsx from 'clsx'
import {VisualEditing} from "next-sanity";
import {draftMode} from "next/headers";

const handwriting = Edu_NSW_ACT_Foundation({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-handwriting"
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter"
});

const robotoSerif = Roboto_Serif({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-serif"
});

const lexend = Lexend({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lexend"
});

export default async function RootLayout({
                                             children
                                         }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de" className={clsx(
            'h-full scroll-smooth bg-white text-primary antialiased',
            inter.variable,
            lexend.variable,
            robotoSerif.variable,
            handwriting.variable
        )}>
        {/*<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />*/}
        {/*<Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl+'&gtm_auth=${process.env.NEXT_PUBLIC_GTM_AUTH}&gtm_preview=${process.env.NEXT_PUBLIC_GTM_ENV}';
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
        `}
    </Script>*/}
        {/*<Providers>*/}
        <body className="flex h-full flex-col font-body">
        {/*<noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?
                      id=${process.env.NEXT_PUBLIC_GTM_ID}&
                      gtm_auth=${process.env.NEXT_PUBLIC_GTM_AUTH}&
                      gtm_preview=${process.env.NEXT_PUBLIC_GTM_ENV}"
                      height="0" width="0" style="display: none; visibility: hidden;"></iframe>`
        }}
      />*/}
        {children}
        {(await draftMode()).isEnabled && (
            <>
                <VisualEditing/>
            </>
        )}
        </body>
        {/*</Providers>*/}
        </html>
    );
}


export const metadata: Metadata = {
    metadataBase: new URL('https://finano.de'),
    title: {
        template: "%s - Finano",
        default: "Finano - Fängt an wo Ihr Onlinebanking aufhört"
    },
    description:
        "Finano hilft Ihnen den finanziellen Überblick zu bewahren. Ob durch das Kontoradar um Transaktionen" +
        " zu überwachen oder den Beleghelfer, der Eingangsrechnungen sicher ablegt.",
    openGraph: {
        title: 'Finano - Wir fangen an, wo Ihr Onlinebanking aufhört.',
        description: "Finano hilft Ihnen den finanziellen Überblick zu bewahren. Ob durch das Kontoradar um Transaktionen " +
            " zu überwachen oder den Beleghelfer, der Eingangsrechnungen sicher ablegt und wenn nötig Ausgangszahlungen ausführen kann.",
        url: 'https://finano.de',
        siteName: 'Finano',
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Finano - Wir fangen an, wo Ihr Onlinebanking aufhört.',
        description: "Finano hilft Ihnen den finanziellen Überblick zu bewahren. Ob durch das Kontoradar um Transaktionen" +
            " zu überwachen oder den Beleghelfer, der Eingangsrechnungen sicher ablegt und wenn nötig Ausgangszahlungen ausführen kann.",
    },
};
