"use client";

import { useState, SetStateAction, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BiMenuAltRight, BiX, BiChevronDown } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";
import SearchForm from "./article/SearchArticle";
import { navData } from "./navData";

// Header Component
const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("IDN");
  const router = usePathname();
  const { user, token, setToken, setUser } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (lang: SetStateAction<string>) => {
    setSelectedLanguage(lang);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser("");
  };

  const toggleMenu = (index: number) => {
    if (activeMenu === index) {
      setActiveMenu(null);
      setActiveSubMenu(null); // reset sub menu when main menu is closed
    } else {
      setActiveMenu(index);
      setActiveSubMenu(null); // reset sub menu when switching main menu
    }
  };

  const toggleSubMenu = (index: number) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };

  return (
    <header
      className={`bg-white shadow-md py-5 md:py-7 fixed w-full z-50 transition-all duration-300 ${
        header ? "backdrop-blur-lg" : ""
      }`}
    >
      <div className="max-w-[1520px] mx-auto w-full px-4 flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image alt="Logo" width={100} height={40} src="/logo.png" />
          </Link>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>

        <nav
          className={`flex flex-col xl:flex-row items-start md:items-center gap-y-6 xl:gap-x-8 mt-8 xl:mt-0 transition-all duration-300 ${
            nav ? "block" : "hidden xl:flex"
          }`}
        >
          {navData.map((link, index) => (
            <div key={index} className="relative">
              {link.subMenu ? (
                <button
                  onClick={() => toggleMenu(index)}
                  className={`flex items-center cursor-pointer px-4 ${
                    link.subMenu.some((subLink) => subLink.path === router)
                      ? "text-blue-600"
                      : ""
                  }`}
                >
                  {link.name}
                  <BiChevronDown className="ml-1 transition-transform duration-200 transform" />
                </button>
              ) : (
                <Link
                  href={link.path}
                  className={`px-4 ${
                    link.path === router ? "text-blue-600" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )}
              {link.subMenu && activeMenu === index && (
                <ul className="absolute left-0 top-full mt-2 p-2 shadow-lg bg-white rounded-md w-48 md:w-60 z-50">
                  {link.subMenu.map((subLink, subIndex) => (
                    <li
                      key={subIndex}
                      className={`relative ${subLink.subMenu && "group"}`}
                    >
                      {subLink.subMenu ? (
                        <>
                          <button
                            onClick={() => toggleSubMenu(subIndex)}
                            className="flex max-md:text-[14px] justify-between items-center hover:bg-gray-100 rounded-md p-2 w-full text-left"
                          >
                            {subLink.name}
                            <BiChevronDown className="ml-1" />
                          </button>
                          {activeSubMenu === subIndex && (
                            <ul className="absolute left-full top-0 mt-0 ml-3 p-2 shadow-lg bg-white rounded-md w-36 md:w-60 z-50">
                              {subLink.subMenu.map(
                                (nestedLink, nestedIndex) => (
                                  <li key={nestedIndex}>
                                    <Link
                                      href={nestedLink.path}
                                      className="block max-md:text-[14px] text-black hover:bg-gray-100 rounded-md p-2"
                                    >
                                      {nestedLink.name}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link
                          href={subLink.path}
                          className="block text-black hover:bg-gray-100 rounded-md p-2 max-md:text-[14px]"
                        >
                          {subLink.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <div
          className={`flex flex-col xl:flex-row items-center gap-y-4 gap-x-4 mt-4 xl:mt-0 ${
            nav ? "block" : "hidden xl:flex"
          }`}
        >
          <SearchForm />

          {/* Divider */}
          <div className="hidden md:block md:w-[1px] md:h-6 bg-gray-300"></div>

          {/* Dropdown Language Selector */}
          {/* <div className="relative">
            <button onClick={() => toggleMenu(-1)} className=" py-2">
              {selectedLanguage}
            </button>
            {activeMenu === -1 && (
              <ul className="absolute right-0 mt-2 p-2 shadow-lg bg-white rounded-md w-48 z-50">
                <li>
                  <button
                    onClick={() => handleLanguageChange("IDN")}
                    className="block text-black hover:bg-gray-100 rounded-md p-2 w-full text-left"
                  >
                    Indonesia
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange("ENG")}
                    className="block text-black hover:bg-gray-100 rounded-md p-2 w-full text-left"
                  >
                    English
                  </button>
                </li>
              </ul>
            )}
          </div> */}

          {/* Divider */}
          {/* <div className="w-12 h-[1px] xl:w-[1px] xl:h-6 bg-gray-300"></div> */}

          {!token ? (
            <Link
              href="/login"
              className="max-md:w-full px-8 py-2 border border-slate-300 rounded-full text-center"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <button onClick={() => toggleMenu(-2)} className=" py-2">
                Welcome, {user ? user : ""}
              </button>
              {activeMenu === -2 && (
                <ul className="absolute right-0 mt-2 p-2 shadow-lg bg-white rounded-md w-48 z-50">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block text-black hover:bg-gray-100 rounded-md p-2 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
