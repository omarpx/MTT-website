import type { Metadata } from "next";
import { Inter, Poppins, Montserrat, Raleway, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // ✅ Footer added back
import { LanguageProvider } from "@/context/LanguageContext";

// Load multiple Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["400", "600", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "700"] });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", weight: ["400", "700"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "MTT Vuokraus & Kuivaus",
  description: "Your trusted rental and drying service",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={`${poppins.variable} ${montserrat.variable} ${inter.variable} ${raleway.variable} ${manrope.variable} 
          antialiased pt-16 bg-[#1E293B] text-white flex flex-col min-h-screen`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer /> {/* ✅ Footer added back */}
        </LanguageProvider>
      </body>
    </html>
  );
}
