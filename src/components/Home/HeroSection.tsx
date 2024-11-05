"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center h-[85vh] mx-4 md:mx-6 rounded-xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
        /> */}

        <Image
          src="https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={1280}
          height={720}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white transition-opacity duration-1000">
          Your Complete Project Management Solution
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-white mt-4 transition-opacity duration-1000 delay-500">
          Collaborate, manage, and innovate all in one place
        </p>

        {/* CTA Button */}
        <a
          href="/get-started"
          className="mt-8 inline-block px-6 py-3 text-indigo-800 bg-white rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
