import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../public/assets/css/vendor/animate.css";
import "../../public/assets/css/vendor/aos.min.css";
import "../../public/assets/css/vendor/flaticons.css";
import "../../public/assets/css/vendor/jquery.slick.css";
import "../../public/assets/css/vendor/materialdesignicons.min.css";
import "../../public/assets/css/vendor/owl.carousel.min.css";
import "../../public/assets/css/vendor/range-slider.css";
import "../../public/assets/css/vendor/remixicon.css";
import "../../public/assets/css/vendor/slick-theme.css";
import "../../public/assets/css/vendor/swiper-bundle.min.css";

// import "../../public/assets/css/color-3.css";
import Footer from "@web/components/Footer/Footer";
import TapToTop from "@web/components/Footer/TapToTop";
import Header from "@web/components/Headers/Header";
import MobileHeader from "@web/components/Headers/MobileHeader";
import { TRPCReactProvider } from "@web/trpc/react";
import "../../public/assets/css/demo-2.css";
import "../../public/assets/css/style.css";
import { AOSInit } from "./AosScript";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TRPCReactProvider>
          <Header />
          <MobileHeader />
          {children}
          <Footer />
          <TapToTop />
          <AOSInit />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
