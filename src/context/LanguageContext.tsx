import React, { createContext, useContext, useState, useEffect } from "react";

// Define the translations
export const translations = {
  English: {
    // Header
    home: "Home",
    aboutUs: "About Us",
    talents: "Talents",
    howItWorks: "How it Works",
    faqs: "Faqs",
    contactUs: "Contact US",
    login: "Login",

    // Add more sections here
    // Example:
    hero: {
      title: "Unlock the Power",
      subtitle: "of Talent",
      section:
        " Whether you're building a team or building a career — we've got you covered.",
      hire: "Hire Talent",
      Talent: "Become a Talent",
      cardTitle: "Who We Are and What We Stand For",
      cardPr:
        "We are a team of passionate innovators, designers, and strategists committed to helping businesses grow and succeed. With years of industry experience, we blend creativity with technology to deliver solutions that truly make a difference process.",
      cardPr1:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    },
  },
  العربية: {
    // Header
    home: "الرئيسية",
    aboutUs: "من نحن",
    talents: "المواهب",
    howItWorks: "كيف يعمل",
    faqs: "الأسئلة الشائعة",
    contactUs: "اتصل بنا",
    login: "تسجيل الدخول",

    // Add more sections here
    // Example:
    hero: {
      title: "فتح الطاقة",
      subtitle: "من المواهب",
      section:
        "سواء كنت تقوم ببناء فريق أو بناء مهنة - فنحن نوفر لك ما تحتاجه.",
      hire: "توظيف المواهب",
      Talent: "تصبح موهبة",
      cardTitle: "من نحن وماذا نمثل",
      cardPr:
        "نحن فريق من المبتكرين والمصممين والاستراتيجيين المتحمسين، ملتزمون بمساعدة الشركات على النمو والنجاح. بخبرة تمتد لسنوات في هذا المجال، نمزج الإبداع بالتكنولوجيا لتقديم حلول تُحدث فرقًا حقيقيًا.",
      cardPr1:
        "إن الهدف من استخدام Lorem Ipsum هو أنه يحتوي على توزيع طبيعي إلى حد ما",
    },
  },
};

type Language = keyof typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.English;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("English");

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = language === "العربية" ? "rtl" : "ltr";
    document.documentElement.lang = language === "العربية" ? "ar" : "en";
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
