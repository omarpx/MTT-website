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
    <nav className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-[#1E1E2E] to-[#3A1C71] shadow-lg z-50 px-4 md:px-8 flex items-center">
      
      {/* Logo (Left on Desktop, Center on Mobile) */}
      <div className="flex-1 flex md:justify-start justify-center">
        <button 
          onClick={handleLogoClick} 
          className="text-lg md:text-xl font-extrabold text-white tracking-wide hover:text-[#A78BFA] transition duration-300"
        >
          MTT Kuivaus & Vuokraus
        </button>
      </div>

      {/* Desktop Navigation (Centered) */}
      <div className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-10">
        {Object.keys(translations.fi).map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className="relative text-lg font-medium text-white transition-all duration-300 hover:text-[#A78BFA] hover:scale-105 after:block after:h-[2px] after:bg-[#A78BFA] after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            {translations[language][item as keyof typeof translations.fi]}
          </Link>
        ))}
      </div>

      {/* Desktop Language Toggle (Right Side) */}
      <div className="hidden md:flex flex-1 justify-end">
        <button onClick={toggleDropdown} className="text-white flex items-center gap-2 px-5 py-2 bg-[#1E1E3E] rounded-full border border-[#A78BFA] hover:bg-[#3A1C71] transition duration-300">
          <Globe size={18} />
          {language === "fi" ? "FI" : "EN"}
          <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-11 w-24 bg-[#1E1E3E] shadow-lg rounded-lg border border-[#A78BFA] z-20"
            >
              <button onClick={() => handleLanguageChange("fi")} className="w-full px-4 py-2 text-white hover:bg-[#3A1C71]">FI</button>
              <button onClick={() => handleLanguageChange("en")} className="w-full px-4 py-2 text-white hover:bg-[#3A1C71]">EN</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
            {/* Close Button Inside Menu */}
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-white">
              <X size={32} />
            </button>

            {Object.keys(translations.fi).map((item) => (
              <Link key={item} href={`/${item}`} className="text-xl font-semibold text-white transition duration-300 hover:text-[#A78BFA]" onClick={toggleMenu}>
                {translations[language][item as keyof typeof translations.fi]}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Language Toggle (Left Side) */}
      <div className="md:hidden absolute top-5 left-4 z-50">
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
              className="absolute left-0 mt-2 w-24 bg-[#1E1E3E] shadow-lg rounded-lg border border-[#A78BFA] z-20"
            >
              <button onClick={() => handleLanguageChange("fi")} className="w-full px-4 py-2 text-white hover:bg-[#4B267B]">FI</button>
              <button onClick={() => handleLanguageChange("en")} className="w-full px-4 py-2 text-white hover:bg-[#4B267B]">EN</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </nav>
  );
};

export default Navbar;
