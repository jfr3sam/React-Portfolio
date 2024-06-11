import React from "react";
import AboutMe from "../components/sections/about/about";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mb-24 font-bold text-3xl text-teal-500 flex justify-center items-center ">
        {t("about_me")}
      </div>
      <AboutMe />
    </>
  );
}
