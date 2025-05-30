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
    // hero: {
    //   title: "Welcome",
    //   subtitle: "Find your next opportunity"
    // }
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
    // hero: {
    //   title: "مرحباً",
    //   subtitle: "ابحث عن فرصتك القادمة"
    // }
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
