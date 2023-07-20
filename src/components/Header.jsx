import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import unnamed from "../assets/unnamed.jpg";
// import { div } from "react-router-dom";

const Header = ({ navbarItems, currentSections }) => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    handleScrollNav();
  }, []);

  const handleScrollNav = () => {
    if (window.scrollY >= 66) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }

    window.addEventListener("scroll", handleScrollNav);
    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  };

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`${
        showBackground ? "bg-white" : ""
      } transition ease-out duration-1000 bg-opacity-80 fixed w-full px-[30px] lg:px-[100px] z-30 h-[60px] lg:h-[90px] flex items-center`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <div className="max-w-[200px]  overflow-hidden object-cover">
          {/* <img className="w-[50px]" src={unnamed} alt="" /> */}
          {/* <p className="cursor-pointer text-[#696c6d]">FRONT-END</p> */}
        </div>
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          {navbarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className={`${
                currentSections == item
                  ? "animate-bounce text-black border-b-2 border-black"
                  : ""
              } cursor-pointer text-[#696c6d] hover:-translate-y-1 transition ease-out duration-300`}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobileNav */}
      <MobileNav navbarItems={navbarItems} />
    </header>
  );
};

export default Header;
