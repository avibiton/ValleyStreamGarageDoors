import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/layout/TopBar";
import { StickyCallButton } from "@/components/layout/StickyCallButton";
import { BUSINESS } from "@/lib/constants";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.baseUrl),
  title: {
    template: "%s | One Stop Garage Door & Opener",
    default: `Garage Door Repair Valley Stream NY 11580 | One Stop Garage Door | ${BUSINESS.phone}`,
  },
  description:
    "Same-day garage door repair in Valley Stream NY 11580 11581. One Stop Garage Door & Opener serves Five Towns Nassau County. Springs, cables, openers. Free estimate.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "One Stop Garage Door & Opener",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body className="min-h-screen flex flex-col pb-16 md:pb-0">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
