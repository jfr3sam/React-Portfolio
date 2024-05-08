import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link
            to=""
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* <img src="" class="h-8" alt="Esam Logo" /> */}
            <span class="self-center text-teal-700 text-2xl font-semibold whitespace-nowrap dark:text-white">
              {t("my_name")}
            </span>
          </Link>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="#" class="hover:underline me-4 md:me-6">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link to="#" class="hover:underline me-4 md:me-6">
                {t("privacy_policy")}
              </Link>
            </li>
            <li>
              <Link to="#" class="hover:underline me-4 md:me-6">
                {t("license")}
              </Link>
            </li>
            <li>
              <Link to="#" class="hover:underline">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {t("signature_date")}{" "}
          <Link to="" class="hover:underline">
            {t("signature_name")}
          </Link>
          {t("signature")}
        </span>
      </div>
    </footer>
  );
}
