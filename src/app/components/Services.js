"use client";
import React from "react";
import { serviceData } from "../assets/assets";
import Image from "next/image";
import { RxArrowRight } from "react-icons/rx";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full scroll-mt-40 px-[10%] py-10"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-ovo mb-3 text-center text-lg"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-ovo text-center text-5xl"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="font-ovo mx-auto mt-5 mb-12 max-w-2xl"
      >
        I offer a range of services to help bring your digital ideas to life.
        From concept to deployment, I&apos;m here to help you succeed.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 gap-6 lg:grid-cols-(--my-grid-cols)"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="hover:bg-lighthover dark:hover:bg-darkhover cursor-pointer rounded-xl border border-gray-500 px-8 py-12 duration-500 hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white"
          >
            <Image src={icon} alt="icon" className="size-8 rounded-md" />
            <h4 className="py-4 font-semibold text-gray-700 dark:text-white">
              {title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="mt-5 flex items-center gap-2 text-sm">
              Read more <RxArrowRight className="mt-1 size-4" />{" "}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
