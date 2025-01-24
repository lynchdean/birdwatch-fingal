import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Footer} from "@/components/footer";
import Navbar from "@/components/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "BWI Fingal Branch",
    description: "BWI Fingal Branch",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-300`}>
        <Navbar/>
        <div className="bg-cover bg-center mb-6 pt-0">
            {/*<div className="bg-cover mb-6 pt-0"*/}
            {/*     style={{backgroundImage: "url('/images/031A3934-Edit.png')"}}>*/}
            <div className="container mx-auto px-4 min-h-screen">
                {children}
            </div>
        </div>

        <Footer/>
        </body>
        </html>
    );
}
