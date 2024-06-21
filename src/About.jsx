/** @format */

import React, { useContext, useState, useEffect } from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { DarkModeContext } from "./DarkModeContext";

function About() {
  const { state } = useContext(DarkModeContext);
  const [onepshow, setOnepshow] = useState(false);
  const [twopshow, setTwopshow] = useState(false);
  const [threepshow, setThreepshow] = useState(false);

  // Apply dark or light mode class to the container
  useEffect(() => {
    const container = document.querySelector('.container');
    if (state.colorMode) {
      container.classList.remove("dark-mode");
      container.classList.add("light-mode");
    } else {
      container.classList.remove("light-mode");
      container.classList.add("dark-mode");
    }
  }, [state.colorMode]);

  return (
    <div className={`about-section  border-2 text-fuchsia-700 w-1/2 mx-auto my-12 p-3 rounded-lg flex flex-col gap-4 select-none ${state.colorMode ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <h1 className='mx-auto text-4xl text-gray-500'>About</h1>
      <div className=''>
        <div
          className='flex justify-between border border-gray-400 items-center px-2 py-3 rounded-lg cursor-pointer'
          onClick={() => setOnepshow(!onepshow)}
        >
          <p>Analyze Your Text</p>
          <span className={onepshow ? "rotate-180" : ""}>
            <RiArrowDownDoubleLine />
          </span>
        </div>
        <div className={onepshow ? "p-2 border-x-2 border-x-gray-500 mt-2" : "hidden"}>
          <p>
            TextWorld gives you a way to analyze your text quickly and
            efficiently. It helps you to count words, characters, or the reading
            time required. The page also has a dark mode feature for better
            experience.
          </p>
        </div>
      </div>
      <div className=''>
        <div
          className='flex justify-between border border-gray-400 items-center px-2 py-3 rounded-lg cursor-pointer'
          onClick={() => setTwopshow(!twopshow)}
        >
          <p>Free To Use</p>
          <span className={twopshow ? "rotate-180" : ""}>
            <RiArrowDownDoubleLine />
          </span>
        </div>
        <div className={twopshow ? "p-2 border-x-2 border-x-gray-500 mt-2" : "hidden"}>
          <p>TextWorld is a free tool that provides numerous features.</p>
        </div>
      </div>
      <div className=''>
        <div
          className='flex justify-between border border-gray-400 items-center px-2 py-3 rounded-lg cursor-pointer'
          onClick={() => setThreepshow(!threepshow)}
        >
          <p>Browser Compatible</p>
          <span className={threepshow ? "rotate-180" : ""}>
            <RiArrowDownDoubleLine />
          </span>
        </div>
        <div className={threepshow ? "p-2 border-x-2 border-x-gray-500 mt-2" : "hidden"}>
          <p>
            TextWorld web application works in any web browser such as Chrome,
            Firefox, Safari, Opera, and many more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
