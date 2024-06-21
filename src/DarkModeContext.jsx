/** @format */

// DarkModeContext.js
import React, { createContext, useReducer } from "react";

const initialState = {
  colorMode: true, // true for light mode, false for dark mode
};

const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COLOR_MODE":
      return { ...state, colorMode: !state.colorMode };
    default:
      return state;
  }
};

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, initialState);

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
