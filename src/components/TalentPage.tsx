import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const TalentPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = language === "العربية" ? "rtl" : "ltr";
  }, [language]);
  return (
    <div className="bg-[#f0f0f0] relative min-h-screen font-['Playfair_Display']">
      {/* Left vertical decorative pattern */}
      {/* <div className="fixed top-0 left-0 h-full flex flex-col items-center justify-center space-y-1 p-1 select-none pointer-events-none">
        {Array.from({ length: 100 }).map((_, index) => (
          <img
            key={index}
            className="w-6 h-6"
            src="https://storage.googleapis.com/a1aa/image/6ceee083-9830-41bf-8d30-426f51a26ef3.jpg"
            alt="Decorative icon resembling a traditional pattern in orange and green colors"
            width={24}
            height={24}
          />
        ))}
      </div> */}

      <main className="mx-auto pb-20">
        {/* Top section */}
        <section
          className="relative rounded-3xl p-8 md:p-12 mb-16"
          // style={{
          //   background:
          //     "radial-gradient(ellipse at center, #c9c3b5 0%, #f0f0f0 100%)",
          // }}
        >
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">
            {t.hero.title}
            <br />
            {t.hero.subtitle}{" "}
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>
          </h1>
          <p className="text-center text-xs sm:text-sm md:text-base font-semibold text-[#1a1a1a] mb-6">
            {t.hero.section}
          </p>

          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            <button
              aria-label="Hire Talent"
              className="bg-[#ff6f47] text-white text-xs sm:text-sm font-semibold rounded-md px-4 py-2 flex items-center gap-1 hover:bg-[#e65c34] transition"
            >
              {t.hero.hire} <i className="fas fa-arrow-right" />
            </button>
            <button
              aria-label="Become a Talent"
              className="bg-white text-[#ff6f47] text-xs sm:text-sm font-semibold rounded-md px-4 py-2 flex items-center gap-1 border border-[#ff6f47] hover:bg-[#ff6f47] hover:text-white transition"
            >
              {t.hero.Talent} <i className="fas fa-arrow-right" />
            </button>
          </div>

          <div
            aria-label="Talent images"
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                src: "https://storage.googleapis.com/a1aa/image/ae28cad9-e1f6-4ea9-865b-8681a99d7d82.jpg",
                alt: "Portrait of a man wearing traditional white thobe and headscarf, looking forward with a slight smile",
                gradient: "#fca28a",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/1e0bd331-06c7-4a01-e4fa-ba7d6145f5d5.jpg",
                alt: "Man working on a laptop in an office environment wearing a white thobe and headscarf",
                gradient: "#fca28a",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/663feb74-a65f-4779-e418-feb3de41617e.jpg",
                alt: "Smiling man in white thobe with arms crossed sitting indoors",
                gradient: "#a89f6e",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/88fd782c-5224-4e7d-e7d0-c6309aacec20.jpg",
                alt: "Group of men playing traditional drums outdoors wearing white thobes and headscarves",
                gradient: "#f3c1d1",
              },
            ].map(({ src, alt, gradient }, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={src}
                  alt={alt}
                  width={300}
                  height={300}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 rounded-b-2xl"
                  style={{
                    background: `linear-gradient(180deg, transparent, ${gradient})`,
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Bottom section */}
        <section className="bg-white rounded-3xl p-8 md:p-12  shadow-[0_10px_0_0_rgba(255,111,71,0.7),0_20px_0_0_rgba(51,17,17,0.7)] max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] mb-8">
            {t.hero.cardTitle}
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0 rounded-3xl overflow-hidden w-full max-w-md">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src="https://storage.googleapis.com/a1aa/image/f62740fe-cf3a-4aff-83e9-98d83f3deacf.jpg"
                alt="Man in white thobe working on a laptop in a modern office with teal and beige background"
                width={400}
                height={300}
              />
            </div>
            <div className="text-xs sm:text-sm text-[#1a1a1a] max-w-xl">
              <p className="mb-4 font-semibold leading-tight">
                {t.hero.cardPr}
              </p>
              <p className="mb-6 font-semibold leading-tight">
                {t.hero.cardPr1}
              </p>
              <button
                aria-label="Hire Talent"
                className="bg-[#ff6f47] text-white text-xs sm:text-sm font-semibold rounded-md px-4 py-2 flex items-center gap-1 hover:bg-[#e65c34] transition"
              >
                {t.hero.hire} <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TalentPage;
