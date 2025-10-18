"use client";
import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import { RxEnvelopeClosed } from "react-icons/rx";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="text-center">
        <Image
          src={theme === "light" ? assets.logo : assets.logo_dark}
          alt="flogo"
          className="mx-auto size-36"
        />
        <div className="flex items-center justify-center gap-2">
          <RxEnvelopeClosed className="mt-1 size-4" />
          makamalfreelance2019@gmail.com
        </div>
      </div>
      <div className="mx-[10%] mt-12 items-center justify-between border-t border-gray-500 py-6 text-center sm:flex">
        <p>©️2025 Mostofa Kamal.All rights reserved.</p>
        <ul className="mt-4 flex items-center justify-center gap-10 lg:mt-0">
          <li>
            <a href="#" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
