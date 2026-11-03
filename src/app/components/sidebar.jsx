"use client";

import { useState } from "react";
import { SearchWiki } from "../functions/searchwiki";
import { useLocale, useTranslations } from "next-intl";
import DropDown from "./dropDown";

export default function SideBar({
  isopen,
  setopening,
  color,
  animate,
  setReadyToAnimate,
}) {
  const locale = useLocale();
  const [input, setinput] = useState("");
  const [error, detectError] = useState(false);
  const t = useTranslations("sidebar");

  return (
    <>
      <div
        onClick={() => setopening(false)}
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          isopen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        style={{ backgroundColor: color }}
        className={`fixed flex flex-col gap-5 top-0 z-40 h-dvh w-64 text-white ${animate ? "transition-transform duration-300 ease-in-out" : ""} ${isopen ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"}`}
      >
        <div className="flex flex-col gap-5 p-5">
          <button
            className="flex text-lg cursor-pointer"
            onClick={() => {
              setopening(false);
              setReadyToAnimate(true);
            }}
          >
            X
          </button>
          <div>
            <div className="relative flex w-full max-w-md">
              <div
                className={`absolute inset-y-0 ${locale == "en" ? "pl-3" : "pr-3"} flex items-center`}
                onClick={(e) => {
                  e.preventDefault();
                  SearchWiki(input, locale, [error, detectError]);
                }}
              >
                <svg
                  className="w-5 h-5 text-gray-400 cursor-pointer"
                  xmlns="http://w3.org"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              <input
                type="search"
                placeholder={
                  !error ? t("inputText") : t('inputError')
                }
                aria-label="Search"
                className={`w-full ${locale == "en" ? "pl-10 pr-4" : "pl-4 pr-10"} py-2 bg-white border border-gray-300 rounded-full text-gray-900 ${error ? "placeholder-red-700" : "placeholder-gray-400"} leading-6 placeholder:text-[10px] text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200`}
                value={input}
                onChange={(e) => setinput(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 pl-10 pr-10">
          <a href="/">{t("homePage")}</a>
          <DropDown
            placeholder={t("media")}
            options={{
              [t("imagesAndVideos")]: "Media",
              [t('game')]: "Operation Badr.html",
            }}
          />
        </div>
        <footer className="fixed bottom-0 pb-5 text-[10px] p-4 text-center">
          {t('footer')}
        </footer>
      </div>
    </>
  );
}
