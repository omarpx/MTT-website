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
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1E1E2E] via-[#3A1C71] to-[#FF6B6B] text-white text-center px-6 pb-16 pt-24 overflow-hidden overscroll-contain">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl bg-[#ffffff0d] backdrop-blur-md p-10 rounded-xl shadow-lg border border-white/20"
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A78BFA] drop-shadow-md">
          {translations[language].title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 font-light tracking-wide">{translations[language].subtitle}</p>
        <p className="mt-4 text-base sm:text-lg text-gray-400 font-medium italic">{translations[language].description}</p>
      </motion.div>

      {/* Animated Featured Services Section */}
      <div className="mt-20 max-w-4xl text-center px-6">
        <h2 className="text-4xl font-semibold text-[#FF6B6B] drop-shadow-lg animate-pulse">{translations[language].featuredServices}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-8">
          {['Fast Delivery', 'Premium Quality', '24/7 Support'].map((service, index) => (
            <motion.div key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#ffffff0d] p-10 rounded-xl shadow-xl border border-white/10 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-[#A78BFA]">{service}</h3>
              <p className="mt-4 text-gray-300">Experience excellence with our {service.toLowerCase()} services.</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action with Hover Effects */}
      <div className="mt-24 max-w-3xl text-center px-6">
        <h2 className="text-4xl font-bold text-[#FF6B6B] drop-shadow-lg">{translations[language].callToAction}</h2>
        <Link 
          href="/contact"
          className="mt-8 inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-[#FF6B6B] to-[#A78BFA] hover:from-[#E04A4A] hover:to-[#9066D0] transition-all rounded-xl shadow-lg transform hover:-translate-y-1"
        >
          {translations[language].quoteBtn}
        </Link>
      </div>
    </section>
  );
}
