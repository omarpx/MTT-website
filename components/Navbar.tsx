"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".menu-container") && !(event.target as HTMLElement).closest(".menu-toggle")) {
        setIsMenuOpen(false);
      }
      if (!(event.target as HTMLElement).closest(".language-dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLanguageChange = (lang: "fi" | "en") => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  const translations = {
    fi: { about: "Tietoa", services: "Palvelut", contact: "Yhteystiedot" },
    en: { about: "About", services: "Services", contact: "Contact" },
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-[#1E1E2E] to-[#3A1C71] shadow-lg z-50 flex items-center justify-between px-4 md:px-8 rounded-b-2xl">
      
      {/* Language Menu (Now on the Left) */}
      <div className="md:hidden">
        <button
          onClick={toggleDropdown}
          className="text-white flex items-center gap-2 px-4 py-2 bg-[#3A1C71] rounded-full border border-[#A78BFA] transition duration-300 hover:bg-[#4B267B]"
        >
          <Globe size={18} />
          {language === "fi" ? "FI" : "EN"}
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute left-4 top-16 w-24 bg-[#1E1E3E] shadow-lg rounded-lg border border-[#A78BFA] z-20"
            >
              <button onClick={() => handleLanguageChange("fi")} className="w-full px-4 py-2 text-white hover:bg-[#4B267B]">FI</button>
              <button onClick={() => handleLanguageChange("en")} className="w-full px-4 py-2 text-white hover:bg-[#4B267B]">EN</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Logo (Perfectly Centered) */}
      <button 
        onClick={handleLogoClick} 
        className="text-lg md:text-xl font-extrabold text-white tracking-wide hover:text-[#A78BFA] transition duration-300 absolute left-1/2 transform -translate-x-1/2"
      >
        MTT Kuivaus & Vuokraus
      </button>

      {/* Mobile Menu Button (Right Side) */}
      <button onClick={toggleMenu} className="md:hidden text-white z-50 menu-toggle">
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 h-full bg-[#2E1A47] shadow-lg flex flex-col items-center justify-center space-y-8 md:hidden menu-container z-50 p-6 rounded-l-2xl"
          >
            {Object.keys(translations.fi).map((item) => (
              <Link key={item} href={`/${item}`} className="text-xl font-semibold text-white transition duration-300 hover:text-[#A78BFA]" onClick={toggleMenu}>
                {translations[language][item as keyof typeof translations.fi]}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
