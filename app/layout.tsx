import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenuDemo } from "@/components/Navbar"; 
const sfMono = localFont({
  variable: "--font-sf-mono",
  src: [
    {
      path: "../public/SFMonoRegular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const CaskaydiaCoveNerdFont = localFont({
  variable: "--font-caskaydiacove-nerd-font-mono",
  src: [
    {
      path: "../public/CaskaydiaCoveNerdFontMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Workshop Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="fr"
      className="light"
      style={{ colorScheme: "light" }}
    >
      <body
        className={`${JetBrainsMono.variable} ${geistMono.variable} font-[CaskaydiaCoveNerdFont] antialiased max-w-screen-lg mx-auto my-[50px]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <NavigationMenuDemo/>
            {children}
        </ThemeProvider>      
      </body>

    </html>
  );
}
