"use client";
import React from "react";
import { assets, workData } from "../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import { RxArrowRight } from "react-icons/rx";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full scroll-mt-40 px-[10%] py-10"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-ovo mb-2 text-center text-lg"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-ovo text-center text-5xl"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="font-ovo mx-auto mt-5 mb-12 max-w-2xl text-center"
      >
        Welcome my web development portfolio! Explore a collection of project
        showcasing my experties in fullstack development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="my-10 grid grid-cols-1 gap-6 lg:grid-cols-(--my-grid-cols) dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative aspect-square cursor-pointer bg-cover bg-center bg-no-repeat"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="absolute bottom-5 left-1/2 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-md bg-white p-3 duration-500 group-hover:bottom-7">
              <div className="leading-5">
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div className="flex aspect-square w-9 items-center justify-center rounded-full border border-black shadow-[2px_2px_2px_#000] transition group-hover:bg-lime-300">
                <Image
                  src={assets.send_icon}
                  alt="sendicon"
                  className="size-4"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="#"
        className="dark:hover:bg-darkhover hover:bg-lighthover mx-auto my-20 flex w-max items-center justify-center gap-2 rounded-full border-[0.5px] border-gray-700 px-12 py-3 duration-500 dark:border-white dark:text-white"
      >
        Show more <RxArrowRight className="mt-1 size-4" />{" "}
      </motion.a>
    </motion.div>
  );
};

export default Work;
