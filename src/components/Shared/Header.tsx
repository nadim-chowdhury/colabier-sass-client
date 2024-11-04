"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="bg-white px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center transition duration-300">
          <Logo className="text-cyan-800 hover:text-cyan-600" />
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-gray-700 hover:text-cyan-600 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button for Desktop */}
        <Link href="/login">
          <button className="hidden md:block px-4 py-2 rounded-lg bg-cyan-700 text-white hover:bg-cyan-600 transition duration-300">
            Log In
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuVisible && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-gray-700 hover:text-cyan-600 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login">
              <button className="w-full px-4 py-2 bg-cyan-800 text-white rounded-lg hover:bg-cyan-600 transition duration-300">
                Log In
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
