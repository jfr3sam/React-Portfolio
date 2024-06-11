import React from "react";
import { useTranslation } from "react-i18next";
import aboutImage from "../../../assets/aboutMe.png";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="bg-grey-300 text-white max-h-80 flex flex-col justify-center items-center p-4">
      <div className="max-w-6xl mx-auto p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/3 ml-20 mr-20  mb-24 md:mb-0">
          <img
            src={aboutImage}
            alt="About Me"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 text-center">
          <div className="text-4xl font-bold mb-8">{t("my_full_name")}</div>
          <p className="mb-4 text-justify">{t("my_description1")}</p>
          <p className="mb-4 text-justify">{t("my_description2")}</p>

          <div className="mt-4 flex justify-between">
            <button className="bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-700 hover:text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              {t("learn_more")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
