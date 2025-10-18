"use client";
import Image from "next/image";
import React from "react";
import { assets, infoList, toolsData } from "../assets/assets";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";

const About = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full scroll-mt-40 px-[10%] py-10"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-ovo mb-2 text-center text-lg"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-ovo text-center text-5xl"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="my-20 flex w-full flex-col items-center justify-center gap-20 lg:flex-row"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-60 max-w-none rounded-3xl sm:w-80"
        >
          <Image
            src={theme === "light" ? assets.header_hero_img : assets.hero_dark}
            alt="abouthero"
            className="rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1"
        >
          <p className="font-ovo mx-auto mb-10 max-w-3xl">
            I am a passionate full-stack developer with expertise in modern web
            technologies. I create digital solutions that blend beautiful design
            with robust functionality to deliver exceptional user experiences.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="dark:hover:bg-darkhover hover:bg-lighthover max-w-2xl rounded-xl border border-gray-500 p-6 duration-500 hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white"
              >
                <Image
                  src={theme === "light" ? icon : iconDark}
                  alt="icon"
                  className="size-6"
                />
                <h4 className="py-4 font-semibold text-gray-700 dark:text-white/90">
                  {title}
                </h4>
                <p className="font-ovo text-sm text-gray-600 dark:text-white/90">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="font-ovo py-6 text-gray-700 dark:text-white/90"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-5"
          >
            {toolsData.map((tools, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex aspect-square items-center justify-center rounded-md border-[0.5px] border-gray-500 p-3 duration-500 hover:-translate-y-1"
              >
                <Image src={tools} alt="tools" className="size-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
