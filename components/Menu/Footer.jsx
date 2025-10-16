import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Footer() {
  const { switchLanguage, locale, translateText } = useContext(LanguageContext);

  const [clientLocale, setClientLocale] = useState("");

  useEffect(() => {
    setClientLocale(locale.toUpperCase());
  }, [locale]);

  // const footerText = translateText("footer_text").replace("{year}", new Date().getFullYear());

  return (
    <footer className="bg-gray-100 text-black py-2 px-4 text-center text-sm md:text-base lg:text-md border border-t-gray-600 p-3">
      {/* <p>{footerText}</p> */}
      <p className="mb-0 text-gray-600 text-[14px]"> © 2025 Mood Mentor All rights reserved. </p>
    </footer>
  ); 
}
