// App.jsx
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { DarkModeProvider, DarkModeContext } from "./DarkModeContext";
import "./App.css";

function App() {
  const { state } = useContext(DarkModeContext);

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
    <div className='container min-h-dvh pb-24'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default () => (
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
