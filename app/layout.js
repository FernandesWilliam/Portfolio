import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" style={{colorScheme: 'dark'}} className="h-full dark">
        <head>
            <title>Portfolio</title>
        </head>

        <body className={inter.className}>
        {children}
        <footer className="w-full h-[70px] flex justify-center items-center">
            Made with ❤️ by&nbsp; <a href="https://github.com/FernandesWilliam"  className="text-primary" target="_blank">Will</a>
        </footer>
        </body>

        </html>
    );
}