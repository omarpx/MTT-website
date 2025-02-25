"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Refit kielivalikolle ja mobiilimenulle
  const languageRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Ulkopuolelle klikkauksen käsittely
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Valikon ja kielivalikon tilan hallinta
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
    setIsMenuOpen(false);
  };

  // Kielen vaihto
  const handleLanguageChange = (lang: "fi" | "en") => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  // Logon klikkaus
  const handleLogoClick = () => {
    pathname === "/" ? window.location.reload() : router.push("/");
  };

  // Tekstien käännökset
  const translations = {
    fi: { about: "Tietoa", services: "Palvelut", contact: "Yhteystiedot" },
    en: { about: "About", services: "Services", contact: "Contact" },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${isScrolled ? 'h-20' : 'h-32'} bg-gradient-to-r from-[#4E5C65] to-[#8A979F] shadow-lg z-[90] flex items-center justify-between px-6 md:px-12 rounded-b-2xl transition-all duration-300`}
    >
      {/* Logo */}
      <button
        onClick={handleLogoClick}
        className="text-lg md:text-xl font-extrabold text-white tracking-wide hover:text-[#4E5C65] transition duration-300 absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:translate-x-0"
      >
        MTT Kuivaus & Vuokraus
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center items-center md:space-x-6 lg:space-x-10">
        {Object.keys(translations.fi).map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className="relative text-lg font-medium text-white transition-all duration-300 hover:text-[#4E5C65] hover:scale-105 after:block after:h-[2px] after:bg-[#4E5C65] after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            {translations[language][item as keyof typeof translations.fi]}
          </Link>
        ))}
      </div>

      {/* Language Toggle (Both Desktop and Mobile) */}
      <div ref={languageRef} className="flex relative language-dropdown">
        <button
          onClick={toggleDropdown}
          className="text-white flex items-center gap-2 px-5 py-2 bg-[#393939] rounded-full border border-[#8A979F] hover:bg-[#4E5C65] transition duration-300"
        >
          <Globe size={18} />
          {language === "fi" ? "FI" : "EN"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
          />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-11 w-24 bg-[#616161] shadow-lg rounded-lg border border-[#8A979F] z-20"
            >
              <button
                onClick={() => handleLanguageChange("fi")}
                className="w-full px-4 py-2 text-white hover:bg-[#4E5C65]"
              >
                FI
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className="w-full px-4 py-2 text-white hover:bg-[#4E5C65]"
              >
                EN
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden text-white z-[100] relative">
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 h-full bg-[#8A979F] shadow-lg flex flex-col items-center justify-center space-y-8 md:hidden z-[50] p-6 rounded-l-2xl"
          >
            {Object.keys(translations.fi).map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="text-xl font-semibold text-white transition duration-300 hover:text-[#4E5C65]"
                onClick={toggleMenu}
              >
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
