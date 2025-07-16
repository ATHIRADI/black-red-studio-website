import Footer from "@/components/section/footer";
import Navbar from "@/components/section/navbar";
// import { metaDataContent } from "@/data/sectionsData";
import { metaDataContent } from "@/data/siteData";
import { Abril_Fatface, Inter } from "next/font/google";
// import { Toaster } from "react-hot-toast";
import ClientWrapper from "@/components/effect/ClientWrapper";
import "./globals.css";

const headingFont = Abril_Fatface({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: metaDataContent.pageTitle,
  description: metaDataContent.pageDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${headingFont.variable} ${bodyFont.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        {/* <Toaster /> */}
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
