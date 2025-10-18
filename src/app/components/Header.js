"use client";
import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import { RxArrowRight, RxDownload } from "react-icons/rx";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  return (
    <div
      id="#top"
      className="mx-auto mt-40 mb-20 flex w-11/12 max-w-3xl flex-col items-center justify-center gap-4 pt-10 text-center lg:pt-10"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={theme === "light"? assets.header_hero_img: assets.hero_dark}
          alt="heroimg"
          className="size-32 rounded-full"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-ovo mb-3 flex items-center justify-center gap-2 text-xl md:text-2xl"
      >
        Hi! I am Mostofa Kamal
        <Image src={assets.hand_icon} alt="handicon" className="size-4" />
      </motion.h3>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px]"
      >
        Full-Stack Web Developer based in Dhaka
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="font-ovo mx-auto max-w-2xl"
      >
        I build exceptional digital experiences that are fast, accessible,
        visually appealing, and responsive. Let`s turn your ideas into reality
        with clean, efficient code.
      </motion.p>
      <div className="mt-5 flex flex-col items-center gap-4 md:flex-row">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="flex items-center justify-center rounded-full border-gray-500 bg-black px-10 py-2.5 text-white dark:border dark:bg-transparent"
        >
          contact me <RxArrowRight className="mt-1 size-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/mkamal-resume.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-full border border-gray-500 px-10 py-2.5 dark:bg-white dark:text-black"
        >
          my resume <RxDownload />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
