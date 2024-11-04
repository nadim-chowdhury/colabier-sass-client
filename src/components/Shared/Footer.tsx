import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.facebook.com", icon: <FaFacebook />, label: "Facebook" },
  { href: "https://www.twitter.com", icon: <FaTwitter />, label: "Twitter" },
  {
    href: "https://www.instagram.com",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  { href: "https://www.linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          {/* Logo */}
          <Logo className="text-white" />

          {/* Navigation Links */}
          <div className="flex space-x-6 font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="hover:text-white transition">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="hover:text-indigo-400 transition"
              >
                <span className="w-5 h-5">{link.icon}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400">
          &copy;{new Date().getFullYear()} Colabier. All rights reserved
          by&nbsp;
          <Link href="https://nadim.vercel.app">
            <span className="underline hover:text-gray-200">
              Nadim Chowdhury
            </span>
          </Link>
          .
        </div>
      </div>
    </footer>
  );
}
