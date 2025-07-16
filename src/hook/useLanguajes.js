import { create } from "zustand";
import { persist } from "zustand/middleware";
import translations from "../lang/languajes";

export const useLanguajesStore = create(
  persist(
    (set) => ({
      languaje: "es",
      texts: translations["es"],
      handleLanguajes: (lang) => {
        const validLang = lang === "en" ? "en" : "es";
        set({
          languaje: validLang,
          texts: translations[validLang],
        });
      },
    }),
    {
      name: "lang-store",
    }
  )
);
