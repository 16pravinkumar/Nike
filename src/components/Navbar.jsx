import { useGSAP } from "@gsap/react";
import { hamburger, crossButton } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import gsap from "gsap";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    gsap.fromTo(
      "#navbar-container",
      { y: -100 },

      {
        y: 0,
        duration: 1,
      }
    );
  }, []);
  return (
    <header
      id="navbar-container"
      className="padding-x py-8 fixed  z-50 w-full  backdrop-filter backdrop-blur-[3px]"
    >
      <nav className="flex  justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={handleMenu}
        >
          <img
            src={isOpen ? crossButton : hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>
      </nav>

      {/* for responsive */}
      <div
        className={`fixed top-20 bg-transparent left-0 w-screen  backdrop-filter backdrop-blur-[3px] z-20 bg-red-950  ${
          isOpen ? "block" : "hidden"
        } `}
      >
        <ul className="flex flex-col items-center gap-4">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-2 text-lg leading-normal font-medium font-montserrat mt-4">
          <a href="/">Sign in</a>
          <a href="/">Explore now</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
