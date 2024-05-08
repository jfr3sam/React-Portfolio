import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend) // Load translation using http backend
  .use(LanguageDetector) // Detect language automatically
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init(
    {
      fallbackLng: "en", // Use English if detected language is unavailable
      debug: true,
      detection: {
        order: [
          "queryString",
          "cookie",
          "localStorage",
          "navigator",
          "htmlTag",
          "path",
          "subdomain",
        ],
        caches: ["cookie"],
      },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json", // Path to the translation files
      },
    },
    function (err, t) {
      // after initialized, set the direction attribute in HTML
      updateDirection();
    }
  );

// Function to update direction based on the current language
function updateDirection() {
  const rtlLanguages = ["ar"]; // Add other RTL languages if needed
  const currentLanguage = i18n.language;
  document.dir = rtlLanguages.includes(currentLanguage) ? "rtl" : "ltr";
}

export default i18n;
