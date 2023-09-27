import "./style.scss";
import Menu from "../../assets/icons/menu.svg"
import { useState, useEffect } from "react";

const index = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
);

const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
};

useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}, [darkMode]);
  return (
    <header className="header dark:bg-[#030712] dark:text-white h-[68px]">
      <div className="container">
        <div className=" flex justify-between items-center py-4  ">
          <div className="title">
            <h1 className="text-[30px] dark:text-white py-[6px] cursor-pointer font-normal">
              &lt;Sh.B/&gt;</h1>


          </div>

          <div className="menubar">
            <img src={Menu} alt="" />
          </div>
          <div className="flex asso_1">
            <div className="md:flex py-[6px] justify-between gap-x-[24px] font-normal hidden ">
              <a className="hoverclaas  " href="#about">
                About
              </a>
              <a className="hoverclaas  " href="#work">
                Work
              </a>
              <a className="hoverclaas  " href="#testimonials">
                Testimonials
              </a>
              <a className="hoverclaas  " href="#contact">
                Contact
              </a>
            </div>
            <div className="md:flex hidden py-[6px] mx-[24px] border-r-2"> </div>
            <div className="md:flex hidden items-center gap-4">
            <i className={`${darkMode ? " moon-icon" : "sun-icon"} bx ${darkMode ? "bx-moon" : "bx-sun"}`} onClick={() => toggleDarkMode()}></i>
              <button className="px-4 download text-white w-[136px] totorino hover:bg-slate-400  hover:text-[#0c0c0c] bg-[#111827]">
                Download CV
              </button>
            </div>
            <i className="px-[6px] mr-[16px] text-2xl block  bx bx-menu"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
