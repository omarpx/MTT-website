"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E2E] text-white py-6 text-center">
      <p className="text-lg font-semibold">MTT Kuivaus & Vuokraus</p>
      <p className="text-gray-400 text-sm mt-1">&copy; {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
}
