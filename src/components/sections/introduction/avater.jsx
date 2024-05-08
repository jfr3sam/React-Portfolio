import React, { useState, useEffect } from "react";
import ProfileImage from "../../../assets/profile.jpg";
import { useTranslation } from "react-i18next";

export default function Avatar() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const messages = [
      t("intro_message_1"),
      t("intro_message_2"),
      t("intro_message_3"),
      t("intro_message_4"),
      t("intro_message_5"),
    ];

    let i = -1;
    setDisplay("");
    const currentMessage = messages[index];

    const interval = setInterval(() => {
      if (i < currentMessage.length) {
        setDisplay((prev) => prev + currentMessage.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 2000);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [index, t]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:mx-16 lg:mx-32">
        <div className="p-8 order-2 md:order-1 mt-24">
          {" "}
          <h1 className="font-bold mb-6 text-teal-500 text-4xl md:text-5xl">
            {t("welcoming_message")}
          </h1>
          <h1 className="font-bold text-4xl md:text-5xl">{display}</h1>
          <p className="text-gray-300 mt-12 text-lg text-justify">
            {t("profile_message")}
          </p>
          <button className="mt-8 bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
            {t("get_in_touch")}
          </button>
        </div>
        <div className="p-8 flex justify-center md:justify-end order-1 md:order-2 lg:mt-24">
          <img
            src={ProfileImage}
            alt="UI UX Designer"
            className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
