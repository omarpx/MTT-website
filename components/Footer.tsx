"use client";

import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Kiitos tilauksestasi, ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-r from-[#4E5C65] to-[#8A979F] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo ja yritystiedot */}
        <div className="flex flex-col items-center md:items-start">
          <Image src="/images/mtt-ai-logo.jpg" alt="MTT Logo" width={120} height={120} className="mb-4" />
          <p className="text-lg font-semibold">MTT Kuivaus & Vuokraus</p>
          <p className="text-sm text-gray-200 mt-2">Luotettavaa palvelua kuivaus- ja vuokraustarpeisiin.</p>
        </div>

        {/* Yhteystiedot */}
        <div>
          <h3 className="text-xl font-bold mb-4">Yhteystiedot</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={20} /> Inspehtorinkatu 3, 20540 Turku
            </li>
            <li className="flex items-center gap-2">
              <Phone size={20} /> 040 186 6144
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} /> omar.polo458@gmail.com
            </li>
          </ul>
        </div>

        {/* Navigointi ja Sosiaalinen media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Navigointi</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-[#393939]">Tietoa</Link></li>
            <li><Link href="/services" className="hover:text-[#393939]">Palvelut</Link></li>
            <li><Link href="/contact" className="hover:text-[#393939]">Yhteystiedot</Link></li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-4">Seuraa meitä</h3>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com" target="_blank" className="hover:text-[#393939]"><Instagram size={24} /></Link>
            <Link href="https://www.facebook.com" target="_blank" className="hover:text-[#393939]"><Facebook size={24} /></Link>
            <Link href="https://www.linkedin.com" target="_blank" className="hover:text-[#393939]"><Linkedin size={24} /></Link>
          </div>
        </div>
      </div>

      {/* Uutiskirje ja pikayhteys */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Tilaa uutiskirje</h3>
        <form onSubmit={handleSubscribe} className="flex justify-center items-center gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Syötä sähköpostisi"
            className="px-4 py-2 rounded-lg text-black w-64"
            required
          />
          <button type="submit" className="px-6 py-2 bg-[#393939] rounded-lg hover:bg-[#4E5C65] transition">Tilaa</button>
        </form>

        <div className="mt-8 space-x-4">
          <Link href="/contact" className="px-6 py-2 bg-[#393939] rounded-lg hover:bg-[#4E5C65] transition">Ota yhteyttä</Link>
          <Link href="/quote" className="px-6 py-2 bg-[#393939] rounded-lg hover:bg-[#4E5C65] transition">Pyydä tarjous</Link>
        </div>
      </div>

      {/* Alatunniste */}
      <div className="mt-12 border-t border-gray-400 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MTT Kuivaus & Vuokraus. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
