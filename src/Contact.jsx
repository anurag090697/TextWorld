/** @format */

import { BsInstagram } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import React, { useContext, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";

function Contact() {
  const { state } = useContext(DarkModeContext);

  // // Apply dark or light mode class to the container
  // useEffect(() => {
  //   const container = document.querySelector('.container');
  //   if (state.colorMode) {
  //     container.classList.remove("dark-mode");
  //     container.classList.add("light-mode");
  //   } else {
  //     container.classList.remove("light-mode");
  //     container.classList.add("dark-mode");
  //   }
  // }, [state.colorMode]);

  return (
    <div className={`contact-section bg-gray-100 border-2 border-fuchsia-600 text-fuchsia-700 w-1/2 mx-auto my-12 p-4 text-2xl rounded-lg flex flex-col gap-4  ${state.colorMode ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <h1 className='mx-auto text-amber-700'>Created By - ANURAG SHUKLA</h1>
      <h1 className='mx-auto text-3xl text-gray-500 '>Contact Me </h1>

      <button
        className='cursor-pointer mx-auto border border-gray-500 p-1'
        onClick={() => {
          navigator.clipboard.writeText("anurag090697@gmail.com");
        }}
      >
        Email: anurag090697@gmail.com
      </button>
      <div className='flex justify-around text-3xl my-2'>
        <a
          href='https://www.instagram.com/im__niks/'
          className='text-rose-400 hover:text-rose-600'
          target='blank'
        >
          <BsInstagram />
        </a>
        <a
          href='https://www.facebook.com/cool.niks213'
          className='text-indigo-600 hover:text-indigo-800'
          target='blank'
        >
          <FaFacebookF />
        </a>
        <a
          href='https://www.linkedin.com/in/anurag-shukla-31b70421b/'
          className='text-blue-400 hover:text-blue-600'
          target='blank'
        >
          <FaLinkedinIn />
        </a>
        <a
          href='https://github.com/anurag090697'
          className='text-gray-500 hover:text-gray-700'
          target='blank'
        >
          <IoLogoGithub />
        </a>
      </div>
    </div>
  );
}

export default Contact;
