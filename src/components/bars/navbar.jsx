import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (isOpen) {
      toggleMenu();
    }
  };

  // Function to switch language and update document direction
  const updateDocumentDirection = useCallback(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
  }, [i18n.language]);

  // Effect to apply the correct direction on initial load and subsequent language changes
  useEffect(() => {
    updateDocumentDirection();
  }, [i18n.language, updateDocumentDirection]);

  const handleLanguageSwitch = useCallback(() => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang).then(() => updateDocumentDirection());
  }, [i18n, updateDocumentDirection]);

  return (
    <nav
      className="bg-white opacity dark:bg-gray-900 mt-8 rounded-2xl fixed z-20 border-b border-gray-200 dark:border-gray-600"
      style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-2 pb-2 pr-8 pl-8">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="self-center text-teal-700 text-2xl font-semibold whitespace-nowrap dark:text-white">
            {t("my_name")}
          </span>
        </Link>
        <div className="flex md:order-2 space-x-4 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleLanguageSwitch}
              className="px-4 py-4 text-center flex items-center bg-red"
            >
              <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
              {/* <span className="mt-0">
                {i18n.language === "en" ? "العربية" : "English"}
              </span> */}
            </button>
          </div>

          <div>
            <button
              type="button"
              onClick={toggleMenu}
              className="text-white min-w-20 bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-3 py-2.5 mt-2 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 transition duration-300 ease-in-out"
            >
              {t("getStarted")}
            </button>
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 mt-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              { path: "/", key: "home" },
              { path: "/about", key: "about" },
              { path: "/services", key: "services" },
              { path: "/contact", key: "contact" },
            ].map(({ path, key }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block py-2 px-3 rounded-lg ${
                    activeTab === path
                      ? "text-white bg-teal-500"
                      : "text-gray-900 hover:bg-gray-100"
                  } dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`}
                  onClick={() => handleTabClick(path)}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
