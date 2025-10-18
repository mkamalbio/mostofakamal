"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { useTheme } from "../context/ThemeContext";
import { BiMoon, BiSun } from "react-icons/bi";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-full translate-y-[-70%] lg:translate-y-[-87%] dark:hidden">
        <Image
          src={assets.headerbgcolor}
          alt="headerbgcolor"
          className="w-full"
        />
      </div>
      <nav
        className={`fixed -top-4 right-0 z-50 flex w-full items-center justify-between px-5 py-4 md:px-8 lg:top-0 lg:px-[8%] ${isScroll ? "dark:bg-darktheme/90 border-white/30 bg-white opacity-80 shadow-sm backdrop-blur-lg dark:border-b" : ""}`}
      >
        <a href="#top" className="mr-14 cursor-pointer">
          <Image
            src={theme === "light" ? assets.logo : assets.logo_dark}
            alt="navbarlogo"
            className="size-28"
          />
        </a>
        <ul
          className={`hidden items-center gap-6 rounded-full px-10 py-3 md:flex lg:gap-8${isScroll ? "" : "bg-white opacity-70 shadow-sm dark:bg-transparent"}`}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <BiSun className="size-6" />
            ) : (
              <BiMoon className="size-6" />
            )}
          </button>
          <a
            href="#contact"
            className="border-grya-400 ml-4 hidden items-center gap-3 rounded-full border px-10 py-2.5 md:flex"
          >
            Contact
            <Image
              src={
                theme === "light" ? assets.arrow_icon : assets.arrow_icon_dark
              }
              alt="arrowicon"
              className="size-3"
            />
          </a>
          <button onClick={openMenu} className="block md:hidden">
            <Image
              src={
                theme === "light" ? assets.black_menu : assets.black_menu_dark
              }
              alt="balckmenu"
              className="size-5"
            />
          </button>
        </div>
        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="dark:bg-darkhover fixed top-0 -right-64 bottom-0 z-50 flex h-screen w-64 flex-col gap-6 bg-rose-50 px-10 py-20 duration-500 md:hidden"
        >
          <button onClick={closeMenu} className="absolute top-6 right-6">
            <Image
              src={
                theme === "light" ? assets.close_icon : assets.close_icon_dark
              }
              alt="closeicon"
              className="size-4"
            />
          </button>
          <li>
            <a onClick={closeMenu} href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about" className="font-ovo">
              About me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services" className="font-ovo">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
