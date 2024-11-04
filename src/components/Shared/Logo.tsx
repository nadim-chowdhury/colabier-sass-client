import localFont from "next/font/local";
import Link from "next/link";

const creamCake = localFont({
  src: "../../app/fonts/CreamCake.otf",
  variable: "--font-cream-cake",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function Logo({ className }: { className: string }) {
  return (
    <Link
      href="/"
      className={`${creamCake.variable} text-4xl font-medium tracking-wide transition duration-300 ease-in-out flex items-center justify-center ${className}`}
    >
      <span style={{ fontFamily: "var(--font-cream-cake)" }}>Colabier</span>
    </Link>
  );
}
