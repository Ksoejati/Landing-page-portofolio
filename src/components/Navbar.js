import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [hamburgerRotate, setHamburgerRotate] = useState(false);
  const [fixNavbar, setFixNavbar] = useState("");

  function addClassName() {
    setHamburgerRotate(!hamburgerRotate);
  }

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setFixNavbar(
        "fixed z-[9999] bg-white bg-opacity-70 backdrop-blur-sm box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1"
      );
    } else {
      setFixNavbar("absolute z-10");
    }
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <div
      id="navbar"
      className={`bg-transparent top-0 left-0 w-full flex items-center ${fixNavbar}`}
      // className="bg-transparent top-0 left-0 w-full flex items-center fixed z-[9999]"
    >
      <div className="container">
        <div className="flex item-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              Sing a Song!
            </a>
          </div>
          <div className="flex relative items-center p-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4"
              onClick={addClassName}
            >
              <span
                className={`w-[30px] h-[2px] my-2 block bg-dark transition duration-200 ease-in-out origin-top-left${
                  hamburgerRotate === true ? " rotate-45" : ""
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] my-2 block bg-dark transition duration-200 ease-in-out${
                  hamburgerRotate === true ? " scale-0" : ""
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] my-2 block bg-dark transition duration-200 ease-in-out origin-bottom-left${
                  hamburgerRotate === true ? " -rotate-45" : ""
                }`}
              ></span>
              {/* <span className="w-[30px] h-[2px] my-2 block bg-dark"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-dark"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-dark"></span> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
