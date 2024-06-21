/** @format */

import React, { useContext, useEffect } from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import anime from "animejs/lib/anime.es.js";
import { DarkModeContext } from "./DarkModeContext";

function Footer() {
  const { state } = useContext(DarkModeContext);
  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml5 .line",
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700,
    })
    .add({
      targets: ".ml5 .line",
      duration: 600,
      easing: "easeOutExpo",
      translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
    })
    .add({
      targets: ".ml5 .ampersand",
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=600",
    })
    .add({
      targets: ".ml5 .letters-left",
      opacity: [0, 1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=300",
    })
    .add({
      targets: ".ml5 .letters-right",
      opacity: [0, 1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=600",
    });

  return (
    <footer
      className={` px-6 py-2 fixed w-full bottom-0 flex items-center justify-between ${
        state.colorMode ? "bg-gray-300" : "bg-blue-800"
      }`}
    >
      <h1 className='ml5'>
        <span className='text-wrapper'>
          <span className='line line1'></span>
          <span className='letters letters-left'>Created By </span>
          <span className='letters ampersand'>-</span>
          <span className='letters letters-right'>
            <a
              href='https://github.com/anurag090697'
              className='text-amber-500'
            >
              ANURAG SHUKLA
            </a>
          </span>
          <span className='line line2'></span>
        </span>
      </h1>
      <div className='flex items-center justify-between gap-3 text-3xl '>
        <a
          href=''
          className={` hover:text-gray-900 ${
            state.colorMode ? "text-gray-700" : "text-blue-200"
          }`}
        >
          <FaGithubSquare />
        </a>
        <a href='' className='text-rose-500 hover:text-rose-700'>
          <FaInstagram />
        </a>
        <a href='' className={` ${
            state.colorMode ? "text-indigo-600 hover:text-indigo-800" : "text-indigo-200 hover:text-indigo-100"
          }`}>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
