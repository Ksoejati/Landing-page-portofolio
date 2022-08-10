import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [hamburgerRotate, setHamburgerRotate] = useState(false);
  const [fixNavbar, setFixNavbar] = useState("");

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setFixNavbar(
        "fixed z-[9999] bg-white bg-opacity-70 backdrop-blur-sm shadow-md"
        // box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1"
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
        <div className="flex relative item-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              Sing a Song!
            </a>
          </div>
          <div className="flex items-center p-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden"
              onClick={() => setHamburgerRotate(!hamburgerRotate)}
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
            <div
              className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full 
                lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${
                  hamburgerRotate === true ? "" : "hidden"
                }`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex hover:text-primary"
                  >
                    About me
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#schedule"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Performance Schedule
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#clients"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Clients
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
