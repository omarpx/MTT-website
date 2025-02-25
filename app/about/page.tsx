"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  // Translations
  const translations = {
    fi: {
      title: "Tietoa MTT Kuivaus & Vuokrauksesta",
      subtitle: "Tarjoamme korkealaatuisia kuivausratkaisuja ja vuokralaitteita yrityksille ja kotitalouksille.",
      ourStory: "Meidän tarinamme",
      storyText:
        "MTT Kuivaus & Vuokraus syntyi tarpeesta tarjota luotettavia ja tehokkaita kuivausratkaisuja. Olemme kasvaneet alamme luotettavaksi toimijaksi ja ymmärrämme laadukkaan kaluston merkityksen asiakkaillemme.",
      coreValues: "Arvomme",
      values: [
        { title: "Luotettavuus", text: "Varmistamme, että jokainen tuotteemme ja palvelumme täyttää korkeimmat laatuvaatimukset." },
        { title: "Tehokkuus", text: "Kuivausratkaisumme toimivat nopeasti ja tehokkaasti." },
        { title: "Asiakaskeskeisyys", text: "Asiakkaamme ovat etusijalla – tarjoamme tukea ja palvelua heidän tarpeisiinsa." }
      ],
      callToAction: "Valmis työskentelemään kanssamme?",
      callToActionText: "Ota yhteyttä jo tänään ja katso, miten MTT Kuivaus & Vuokraus voi auttaa sinua!",
      contactButton: "Ota yhteyttä"
    },
    en: {
      title: "About MTT Kuivaus & Vuokraus",
      subtitle: "Providing high-quality drying solutions and rental equipment to businesses and homes.",
      ourStory: "Our Story",
      storyText:
        "MTT Kuivaus & Vuokraus was founded with a mission to provide reliable and efficient drying solutions. We have grown to become a trusted name in the industry, understanding the importance of high-quality equipment for businesses and homeowners alike.",
      coreValues: "Our Core Values",
      values: [
        { title: "Reliability", text: "We ensure that every product and service meets the highest industry standards." },
        { title: "Efficiency", text: "Our drying solutions are designed to work quickly and effectively." },
        { title: "Customer Focus", text: "We prioritize our customers’ needs with dedicated support and service." }
      ],
      callToAction: "Ready to Work With Us?",
      callToActionText: "Get in touch today and discover how MTT Kuivaus & Vuokraus can help you!",
      contactButton: "Contact Us"
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 pb-16 pt-24 w-full">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl bg-[var(--card-bg)] backdrop-blur-md p-10 rounded-xl shadow-xl border border-[var(--border-color)] text-center w-full"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800">
          {translations[language].title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 font-light max-w-full">
          {translations[language].subtitle}
        </p>
      </motion.div>

      {/* Company Story Section */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 flex flex-col md:flex-row items-center max-w-6xl w-full px-4"
      >
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-bold text-gray-800">{translations[language].ourStory}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-full">
            {translations[language].storyText}
          </p>
        </div>
        <div className="md:w-1/2 p-6 flex justify-center">
          <Image 
            src="/images/catto.JPG" 
            alt="Our Story Image" 
            width={500} 
            height={300} 
            className="rounded-lg shadow-lg w-full h-auto object-cover max-w-xs sm:max-w-sm md:max-w-md"
            priority
          />
        </div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 max-w-5xl text-center px-4"
      >
        <h2 className="text-4xl font-bold text-gray-800">{translations[language].coreValues}</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {translations[language].values.map((value, index) => (
            <div key={index} className="p-6 bg-[var(--card-bg)] rounded-xl shadow-md border border-[var(--border-color)] max-w-full">
              <h3 className="text-2xl font-bold text-gray-700">{value.title}</h3>
              <p className="mt-3 text-gray-600">{value.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-20 text-center max-w-3xl px-4"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          {translations[language].callToAction}
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-full">
          {translations[language].callToActionText}
        </p>
        <a 
          href="/contact"
          className="mt-6 inline-block px-10 py-4 text-lg font-bold bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 transition-all rounded-xl shadow-md"
        >
          {translations[language].contactButton}
        </a>
      </motion.div>

    </section>
  );
}
