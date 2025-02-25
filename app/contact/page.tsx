"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const translations = {
    fi: {
      title: "Ota Yhteyttä",
      subtitle: "Täytä lomake tai ota yhteyttä suoraan.",
      location: "Sijainti",
      phone: "Puhelin",
      email: "Sähköposti",
      website: "Verkkosivusto",
      findUs: "Löydä meidät täältä",
      form: {
        name: "Nimi",
        email: "Sähköposti",
        message: "Viesti",
        send: "Lähetä Viesti",
        success: "Viesti lähetetty onnistuneesti!",
        error: "Viestiä ei voitu lähettää. Yritä uudelleen.",
      },
    },
    en: {
      title: "Contact Us",
      subtitle: "Fill out the form or reach out directly.",
      location: "Location",
      phone: "Phone",
      email: "Email",
      website: "Website",
      findUs: "Find Us Here",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
      },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 pt-24 pb-16 w-full">
      
      {/* Left Side: Contact Info & Form */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 space-y-6"
      >
        {/* Header */}
        <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-xl border border-[var(--border-color)] text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            {translations[language].title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 font-light">
            {translations[language].subtitle}
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-md border border-[var(--border-color)] space-y-4">
          <div className="flex items-center gap-4">
            <MapPin size={24} className="text-gray-600" />
            <p className="text-lg text-gray-700">
              <strong>{translations[language].location}:</strong> Inspehtorinkatu 3, 20540, Turku, Finland
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Phone size={24} className="text-gray-600" />
            <p className="text-lg text-gray-700">
              <strong>{translations[language].phone}:</strong> 0401866144
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Mail size={24} className="text-gray-600" />
            <p className="text-lg text-gray-700">
              <strong>{translations[language].email}:</strong> omar.polo458@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-[var(--card-bg)] p-6 rounded-xl shadow-xl border border-[var(--border-color)]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={translations[language].form.name}
            required
            className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={translations[language].form.email}
            required
            className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={translations[language].form.message}
            rows={3}
            required
            className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded-md"
          />
          
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all"
          >
            <Send size={20} />
            {translations[language].form.send}
          </button>

          {/* Success/Error Message */}
          {status === "error" && (
            <p className="text-red-500 text-sm mt-2">{translations[language].form.error}</p>
          )}
          {status === "success" && (
            <p className="text-green-500 text-sm mt-2">{translations[language].form.success}</p>
          )}
        </form>
      </motion.div>

      {/* Right Side: Google Maps */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center md:ml-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">{translations[language].findUs}</h2>
        <iframe 
          src="https://www.google.com/maps?q=Inspehtorinkatu+3,+20540+Turku,+Finland&output=embed" 
          width="100%" 
          height="350" 
          allowFullScreen 
          loading="lazy" 
          className="rounded-lg shadow-lg"
        />
      </motion.div>

    </section>
  );
}
