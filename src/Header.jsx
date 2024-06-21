/** @format */

// Header.jsx
import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { DarkModeContext } from "./DarkModeContext";
import anime from "animejs/lib/anime.es.js";

function Header() {
  const { state, dispatch } = useContext(DarkModeContext);

  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: ".ml145 .word",
      scale: [14, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 2000,
      delay: (el, i) => 800 * i,
    });
  }, []);

  return (
    <header
      className={`flex justify-between items-center px-6 py-3 ${
        state.colorMode ? "bg-gray-300" : "bg-blue-900"
      }`}
    >
      <div className='flex justify-between items-center gap-12'>
        <NavLink to='/'>
          <h1 className='ml145'>
            <span className='word text-fuchsia-700'>Text</span>
            <span className='word text-amber-600'>World</span>
          </h1>
        </NavLink>
        <div className='flex justify-between items-center gap-3 text-lg'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? "active hover:text-indigo-500"
                : "hover:text-indigo-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/About'
            className={({ isActive }) =>
              isActive
                ? "active hover:text-indigo-500"
                : "hover:text-indigo-500"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to='/Contact'
            className={({ isActive }) =>
              isActive
                ? "active hover:text-indigo-500"
                : "hover:text-indigo-500"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div className='flex justify-between items-center gap-3'>
        <div
          className='flex justify-between gap-6 select-none items-center bg-black py-2 px-3 rounded-2xl cursor-pointer'
          onClick={() => dispatch({ type: "TOGGLE_COLOR_MODE" })}
        >
          <span className='text-amber-300 text-lg'>
            <FaSun />
          </span>
          <span className='text-white text-lg'>
            <FaMoon />
          </span>
          <div
            id='white'
            className={`rounded-full w-6 h-6 bg-amber-600 transform ${
              state.colorMode ? "translate-x-0" : "translate-x-10"
            } transition-transform duration-300`}
          ></div>
        </div>
        <h3 className={` ${state.colorMode ? "" : "text-gray-200"}`}>
          {state.colorMode ? "Enable Dark mode" : "Enable Light Mode"}
        </h3>
      </div>
    </header>
  );
}

export default Header;
