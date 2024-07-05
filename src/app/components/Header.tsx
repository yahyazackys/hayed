"use client";

import { BiMenuAltRight, BiX, BiChevronDown } from "react-icons/bi";
import { useState, useEffect, SetStateAction } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

// nav data
export const navData = [
  { name: "Beranda", path: "/" },
  {
    name: "Tentang Kami",
    subMenu: [
      { name: "Visi, Misi dan Nilai", path: "/vision-mission-value" },
      { name: "Konsultan", path: "/consultant" },
    ],
  },
  {
    name: "Layanan",
    subMenu: [
      { name: "Seminar dan Kegiatan", path: "/seminar-and-activity" },
      {
        name: "Servis",
        subMenu: [
          { name: "Akuntansi", path: "/service/accounting" },
          { name: "Audit", path: "/service/auditing" },
          {
            name: "Penasihat Bisnis",
            path: "/service/business-advisory",
          },
          {
            name: "Pelatihan Bisnis",
            path: "/service/business-training",
          },
          {
            name: "Perpajakan",
            path: "/service/taxation",
          },
        ],
      },
    ],
  },
  {
    name: "Karir",
    subMenu: [
      { name: "Lowongan Pekerjaan", path: "/job-vacancy" },
      { name: "Program dan Kegiatan", path: "/program-and-activity" },
    ],
  },
  { name: "Artikel", path: "/article" },
  { name: "Forum", path: "/about" },
];

const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("IDN");
  const router = usePathname();

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

  return (
    <header
      className={`bg-white shadow-md py-7 fixed w-full max-w-[1920px] z-50 transition-all duration-300 ${
        header ? "backdrop-blur" : ""
      }`}
    >
      <div className="xl:mx-28 mx-8 transition-all duration-300 flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center gap-x-36">
          <Link href={"/"} className="cursor-pointer">
            <Image
              alt="Logo"
              width={120}
              height={200}
              className="h-auto"
              src="/logo.png"
            />
          </Link>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl text-black-soft" />
            ) : (
              <BiMenuAltRight
                className={`text-4xl ${header ? "text-black-soft" : ""}`}
              />
            )}
          </div>
        </div>
        <nav
          className={`flex flex-col xl:flex-row w-full bg-white gap-y-6 font-bold xl:font-medium xl:w-max xl:gap-x-12 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case ${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "hidden xl:flex"
          }`}
        >
          {navData.map((link, index) => (
            <div
              className={`relative group ${
                link.subMenu && "dropdown dropdown-hover dropdown-bottom"
              }`}
              key={index}
            >
              {link.subMenu ? (
                <div
                  tabIndex={index}
                  className={`flex relative justify-center items-center group-hover:text-blue-soft transition-all duration-200 text-[16px] text-black-soft cursor-pointer ${
                    link.subMenu.some((subLink) => subLink.path === router)
                      ? "text-blue-normal"
                      : ""
                  }`}
                >
                  {link.name}
                  <BiChevronDown className="ml-1 transition-transform duration-200 transform group-hover:rotate-180" />
                </div>
              ) : (
                <Link
                  className={`flex relative justify-center items-center group-hover:text-blue-soft transition-all duration-200 text-[16px] text-black-soft ${
                    link.path === router ? "text-blue-normal" : ""
                  }`}
                  href={link.path}
                >
                  {link.name}
                </Link>
              )}
              {link.subMenu && (
                <ul
                  tabIndex={index}
                  className="dropdown-content z-[1] menu p-2 gap-y-2 shadow bg-white rounded-box font-normal w-48"
                >
                  {link.subMenu.map((subLink, subIndex) => (
                    <li
                      key={subIndex}
                      className={`relative ${
                        subLink.subMenu &&
                        "dropdown dropdown-hover dropdown-right"
                      }`}
                    >
                      {subLink.subMenu ? (
                        <div className="flex justify-between items-center hover:bg-gray-100 rounded-xl p-2 group">
                          {subLink.name}
                          <BiChevronDown className="ml-1" />
                          <ul
                            tabIndex={subIndex}
                            className={`${
                              subLink.subMenu &&
                              "z-[1] menu p-2 gap-y-2 shadow bg-white rounded-box font-normal w-48 absolute left-full top-0 ml-3 hidden group-hover:flex"
                            }`}
                          >
                            {subLink.subMenu.map((nestedLink, nestedIndex) => (
                              <Link
                                key={nestedIndex}
                                href={nestedLink.path}
                                className="text-black-soft hover:bg-gray-100 rounded-xl p-2"
                              >
                                {nestedLink.name}
                              </Link>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          href={subLink.path}
                          className="text-black-soft hover:bg-gray-100 rounded-xl p-2"
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
          className={`flex items-center gap-x-4 justify-center ${
            nav ? "" : "hidden xl:flex"
          }`}
        >
          {/* Search Icon */}
          <div className="flex items-center hover:cursor-pointer">
            <CiSearch className="text-xl text-black-soft" />
          </div>

          {/* Divider */}
          <div className="w-[1px] h-6 bg-gray-300"></div>

          {/* Dropdown Language Selector */}
          <div className="dropdown dropdown-end dropdown-hover text-black-soft">
            <p
              tabIndex={0}
              className="bg-white text-black-soft w-10 hover:cursor-pointer"
            >
              {selectedLanguage}
            </p>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box"
            >
              <li>
                <button onClick={() => handleLanguageChange("IDN")}>
                  Indonesia
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("ENG")}>
                  English
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
