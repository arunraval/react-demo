import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  React.useEffect(() => {
    document.documentElement.dir = language === "العربية" ? "rtl" : "ltr";
  }, [language]);

  return (
    <nav className="flex items-center justify-between px-6 py-4  mx-auto bg-gradient-to-r from-[#f0f0ed] to-[#f9f4f2]">
      <div className="flex items-center space-x-2">
        <img
          src="https://storage.googleapis.com/a1aa/image/1e5c78c3-1138-4ee7-679b-076e6addb52c.jpg"
          alt="Nahham logo in Arabic calligraphy style with dark maroon color"
          className="h-10 w-auto"
          width={80}
          height={40}
        />
        <span className="text-[10px] font-bold text-[#b94a4a] -mt-1">
          NAHHAM
        </span>
      </div>

      <div className="flex items-center space-x-4 md:space-x-9">
        {/* Navigation menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm font-semibold text-[#1a1a1a]">
            {[
              t.home,
              t.aboutUs,
              t.talents,
              t.howItWorks,
              t.faqs,
              t.contactUs,
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-white p-1 rounded-md flex gap-2">
            <button
              type="button"
              onClick={() => setLanguage("English")}
              className={`text-sm cursor-pointer font-semibold rounded-md px-4 py-2 ${
                language === "English"
                  ? "bg-black text-white"
                  : "text-[#1a1a1a]"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage("العربية")}
              className={`text-sm cursor-pointer font-semibold rounded-md px-4 py-2 ${
                language === "العربية"
                  ? "bg-black text-white"
                  : "text-[#1a1a1a]"
              }`}
            >
              العربية
            </button>
          </div>
          <button
            type="button"
            className="bg-[#ff623d] cursor-pointer text-white text-sm font-semibold rounded-md px-4 py-3"
          >
            {t.login}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
