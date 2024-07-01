"use client";

import { useState } from "react";
import Link from "next/link";

import smd from "@/content/data/siteMetaData";
import { StaticPages } from "@/content/data";

import IconComponent from "@/components/ui/IconComponent";
import { footerReyhan } from "@/public/assets/images";

export default function Header() {
  const [menuIcon, setIcon] = useState(false);
  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };
  const handleSmallerScreensNavigationClose = () => {
    setIcon(false);
  };
  const menu = StaticPages.filter((m) => m.id < 4);
  const menu2 = StaticPages.filter((m) => m.id > 3);
  return (
    <header className="mx-auto md:container px-4 lg:px-0 py-2 flex items-center justify-between">
      <Link
        id="platform"
        onClick={handleSmallerScreensNavigationClose}
        href="/"
        className="gradientTransition z-50"
      >
        <div className="w-10 md:w-16 xl:w-20">
          <img src={smd.siteLogo} alt={smd.title} className="p-0.5" />
        </div>
      </Link>
      <nav className="fixed py-1 my-1 md:my-4 px-6 border border-solid border-dark rounded-full font-extralight text-sm md:text-base bg-white bg-opacity-40 top-2 right-1/2 translate-x-1/2 bg-light/60 backdrop-blur-sm z-50">
        <ul className="flex justify-center items-center space-x-4">
          {menu.map((p) => (
            <li
              key={p.id}
              className={`border-b border-b-white hover:border-b-indigo `}
            >
              <Link
                onClick={handleSmallerScreensNavigationClose}
                href={`/${p.link}`}
              >
                {p.title.toLowerCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div onClick={handleSmallerScreensNavigation} className="z-50">
        {menuIcon ? (
          <IconComponent name="menuClose" size={24} color="FF0000" />
        ) : (
          <IconComponent name="menu" size={24} color="333366" />
        )}
      </div>
      {/*  */}
      <div
        className={` inset-0 flex justify-center items-center w-full gradientIndigo ease-out duration-300 z-30 overflow-ellipsis ${
          menuIcon ? "left-0 fixed" : "absolute left-[-100%] "
        }`}
      >
        {/* Smaller screen navbar */}
        <div className=" py-24">
          <ul className="mx-auto w-24 text-2xl text-center text-indigo-light-3">
            {menu2.map((p) => (
              <li
                key={p.id}
                className={`py-2 hover:text-accent cursor-pointer border-b border-indigo-light-1`}
              >
                <Link
                  onClick={handleSmallerScreensNavigation}
                  href={`/${p.link}`}
                >
                  {p.title.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center items-center mt-8 text-indigo-dark-3">
            <a href="/reyhan">
              <img
                src={footerReyhan.src}
                alt="reyhan çetin"
                title="reyhan çetin"
                className="m-0 p-2 h-28 w-28 border-2 border-indigo-light-1 rounded-full gradientTransition"
              />
            </a>
            <h3 className="font-normal">Hoşgeldiniz</h3>
            <p>Sizin için ne yapabiliriz?</p>
          </div>
        </div>
      </div>
    </header>
  );
}
