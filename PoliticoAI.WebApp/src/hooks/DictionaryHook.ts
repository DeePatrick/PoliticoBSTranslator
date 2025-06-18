import { useContext } from "react";
import { DictionaryContext } from "../providers/DictionaryProvider";

export const useDictionary = () => {
  const context = useContext(DictionaryContext);

  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }

  return (key: string) => {
    return context.dictionary?.[key] ?? `__${key}__`;
  };
};
