"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const { language } = useLanguage();

  const translations = {
    fi: {
      title: "MTT Vuokraus & Kuivaus",
      subtitle: "Luotettava vuokraus- ja kuivauspalvelu kaikkiin tarpeisiisi.",
      description: "🛠 Korkealaatuiset vuokrakalusteet ja kuivausratkaisut tarpeisiisi – nopeasti, joustavasti ja edullisesti.",
      benefits: ["✅ Luotettava palvelu", "✅ Laadukkaat laitteet", "✅ Nopea toimitus"],
      callToAction: "🔹 Tarvitsetko vuokraus- tai kuivauspalvelua? Ota yhteyttä jo tänään!",
      servicesBtn: "Tutustu palveluihin",
      quoteBtn: "Pyydä tarjous",
      howItWorks: "Miten palvelumme toimii?",
      stepOne: "1. Ota yhteyttä ja kerro tarpeesi",
      stepTwo: "2. Saat tarjouksen ja sopimuksen ehdoista",
      stepThree: "3. Nopea toimitus ja käyttöönotto",
      exploreMore: "Tutustu innovatiivisiin ratkaisuihimme",
      latestTech: "Hyödynnämme uusinta teknologiaa tehokkuuden parantamiseksi",
      featuredServices: "Erikoispalvelut",
    },
    en: {
      title: "MTT Rental & Drying",
      subtitle: "Reliable rental and drying services for all your needs.",
      description: "🛠 High-quality rental equipment and drying solutions – fast, flexible, and affordable.",
      benefits: ["✅ Reliable service", "✅ High-quality equipment", "✅ Fast delivery"],
      callToAction: "🔹 Need rental or drying services? Contact us today!",
      servicesBtn: "Explore Services",
      quoteBtn: "Request a Quote",
      howItWorks: "How Our Service Works",
      stepOne: "1. Contact us and describe your needs",
      stepTwo: "2. Receive a quote and agree on terms",
      stepThree: "3. Fast delivery and setup",
      exploreMore: "Discover Our Cutting-Edge Solutions",
      latestTech: "We leverage the latest technology to enhance efficiency",
      featuredServices: "Featured Services",
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] text-center px-6 pb-16 pt-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl bg-[var(--card-bg)] backdrop-blur-md p-10 rounded-xl shadow-xl border border-[var(--border-color)]"
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-800">
          {translations[language].title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 font-light">
          {translations[language].subtitle}
        </p>
        <p className="mt-4 text-base sm:text-lg text-gray-500 italic">
          {translations[language].description}
        </p>
      </motion.div>

      {/* Animated Featured Services Section */}
      <div className="mt-20 max-w-4xl text-center px-6">
        <h2 className="text-4xl font-semibold text-gray-700">{translations[language].featuredServices}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-8">
          {['Nopea toimitus', 'Laadukkaat laitteet', '24/7 Tuki'].map((service, index) => (
            <motion.div key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-10 rounded-xl shadow-md border border-gray-300 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-gray-800">{service}</h3>
              <p className="mt-4 text-gray-600">Koe erinomainen palvelu {service.toLowerCase()}-ratkaisuillamme.</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-24 max-w-3xl text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800">{translations[language].callToAction}</h2>
        <Link 
          href="/contact"
          className="mt-8 inline-block px-10 py-5 text-lg font-bold bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 transition-all rounded-xl shadow-md"
        >
          {translations[language].quoteBtn}
        </Link>
      </div>
    </section>
  );
}
