import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  tr: (typeof translations)["es"];
};

const LanguageContext = createContext<Ctx | null>(null);

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  const saved = localStorage.getItem("lang") as Lang | null;
  if (saved === "es" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    const parts = key.split(".");
    let val: unknown = translations[lang];
    for (const p of parts) {
      if (val && typeof val === "object") {
        val = (val as Record<string, unknown>)[p];
      } else {
        return key;
      }
    }
    return typeof val === "string" ? val : key;
  };

  const tr = translations[lang] as (typeof translations)["es"];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}