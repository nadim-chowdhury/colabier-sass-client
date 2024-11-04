"use client";

import { useState } from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center transition duration-300">
          <Logo className="text-cyan-800 hover:text-cyan-600" />
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-cyan-600 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button for Desktop */}
        <Link href="/login">
          <Button
            type="primary"
            className="hidden md:block rounded-lg bg-cyan-800 hover:bg-cyan-800 transition duration-300"
          >
            Log In
          </Button>
        </Link>

        {/* Mobile Menu Icon */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      {menuVisible && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-cyan-600 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login">
              <Button
                type="primary"
                block
                className="bg-cyan-800 hover:bg-cyan-800 transition duration-300"
              >
                Log In
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
