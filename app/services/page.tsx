"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Wrench, Droplet, ShieldCheck, Clock, Package, Sparkles, Star, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const { language } = useLanguage();

  const translations = {
    fi: {
      title: "Palvelumme",
      subtitle: "Tutustu laadukkaisiin kuivaus- ja vuokrausratkaisuihimme, jotka on suunniteltu tehokkuuden ja luotettavuuden takaamiseksi.",
      featuresTitle: "Miksi valita meidät?",
      testimonialsTitle: "Mitä asiakkaamme sanovat",
      needServices: "Tarvitsetko palveluitamme?",
      contactText: "Ota yhteyttä jo tänään ja löydetään sinulle täydellinen ratkaisu!",
      contactButton: "Ota yhteyttä",
      services: [
        { title: "Ammattimainen Kuivaus", description: "Nopeat ja tehokkaat kuivausratkaisut koteihin ja yrityksiin.", icon: Droplet },
        { title: "Laitevuokraus", description: "Laadukkaat vuokralaitteet kaikkiin tarpeisiisi.", icon: Package },
        { title: "Hätäpalvelut", description: "24/7 päivystävä kuivaus ja vesivahinkojen hallinta.", icon: Clock },
        { title: "Edistyksellinen Teknologia", description: "Hyödynnämme uusinta teknologiaa maksimaalisen tehokkuuden saavuttamiseksi.", icon: Sparkles },
        { title: "Luotettava Suojaus", description: "Suojaa omaisuutesi asiantuntevilla kuivausratkaisuillamme.", icon: ShieldCheck },
        { title: "Räätälöidyt Ratkaisut", description: "Mukautetut kuivaussuunnitelmat ainutlaatuisiin tilanteisiin.", icon: Wrench },
      ],
      features: [
        { title: "100% Asiakastyytyväisyys", icon: Star },
        { title: "Yli 5000 Asiakasta", icon: Users },
        { title: "Takuu Jokaiselle Palvelulle", icon: CheckCircle },
      ],
      testimonials: [
        { name: "Anna K.", review: "Huikea palvelu! Kuivauslaitteet toimivat täydellisesti.", location: "Helsinki, FI" },
        { name: "Markus L.", review: "Voin luottaa heidän palveluunsa hätätilanteissa.", location: "Turku, FI" },
      ],
    },
    en: {
      title: "Our Services",
      subtitle: "Discover our high-quality drying and rental solutions, designed to meet your needs with efficiency and reliability.",
      featuresTitle: "Why Choose Us?",
      testimonialsTitle: "What Our Customers Say",
      needServices: "Need Our Services?",
      contactText: "Get in touch with us today and let’s find the perfect solution for you!",
      contactButton: "Contact Us",
      services: [
        { title: "Professional Drying", description: "Fast and effective drying solutions for homes and businesses.", icon: Droplet },
        { title: "Equipment Rentals", description: "High-quality rental equipment for all your needs.", icon: Package },
        { title: "Emergency Services", description: "24/7 emergency drying and water damage restoration.", icon: Clock },
        { title: "Advanced Technology", description: "We use the latest tech for maximum efficiency.", icon: Sparkles },
        { title: "Reliable Protection", description: "Protect your property with our expert drying solutions.", icon: ShieldCheck },
        { title: "Custom Solutions", description: "Tailored drying plans for unique situations.", icon: Wrench },
      ],
      features: [
        { title: "100% Customer Satisfaction", icon: Star },
        { title: "Over 5000 Clients", icon: Users },
        { title: "Guarantee on Every Service", icon: CheckCircle },
      ],
      testimonials: [
        { name: "Anna K.", review: "Amazing service! The drying equipment worked perfectly.", location: "Helsinki, FI" },
        { name: "Markus L.", review: "I can always rely on their service in emergencies.", location: "Turku, FI" },
      ],
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1E1E2E] via-[#3A1C71] to-[#FF6B6B] text-white px-6 pt-24 pb-16 w-full">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl bg-[#ffffff0d] backdrop-blur-md p-10 rounded-xl shadow-lg border border-white/20"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A78BFA] drop-shadow-md">
          {translations[language].title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 font-light">
          {translations[language].subtitle}
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
      >
        {translations[language].services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-[#ffffff0d] rounded-xl shadow-lg border border-white/20 flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:bg-[#ffffff1a]"
          >
            <service.icon size={50} className="text-[#A78BFA]" />
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Feature Section */}
      <motion.div className="mt-16 flex flex-wrap justify-center gap-8 max-w-6xl">
        {translations[language].features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-[#ffffff0d] rounded-xl shadow-lg border border-white/20 flex flex-col items-center text-center space-y-2"
          >
            <feature.icon size={40} className="text-[#FF6B6B]" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.div className="mt-16 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-[#A78BFA]">{translations[language].testimonialsTitle}</h2>
        <div className="mt-8 space-y-6">
          {translations[language].testimonials.map((testimonial, index) => (
            <p key={index} className="italic text-gray-300">“{testimonial.review}” — {testimonial.name}, {testimonial.location}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
