"use client";

import { motion } from "framer-motion";
import { Button, Typography } from "antd";
import Image from "next/image";

const { Title, Text } = Typography;

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[85vh] mx-4 md:mx-6 rounded-xl overflow-hidden">
      {/* Background Video/Image */}
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
        {/* Title using Ant Design Typography.Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title
            level={1}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
          >
            Your Complete Project Management Solution
          </Title>
        </motion.div>

        {/* Tagline using Ant Design Typography.Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4"
        >
          <Text className="text-lg md:text-2xl text-white">
            Collaborate, manage, and innovate all in one place
          </Text>
        </motion.div>

        {/* CTA Button using Ant Design Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <Button
            type="primary"
            size="large"
            href="/get-started"
            className="text-indigo-800 bg-white rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
