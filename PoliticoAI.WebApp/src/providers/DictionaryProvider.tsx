import { PropsWithChildren, createContext } from "react";
import { useGetDictionaryQuery } from "../api/downloaderMainApi";

type DictionaryContextType = {
  dictionary: Record<string, string>;
};

export const DictionaryContext = createContext<DictionaryContextType | null>(
  null,
);

export const DictionaryProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { data: dictionary, isLoading, error } = useGetDictionaryQuery();

  if (isLoading) {
    return <div className="text-center">Loading dictionary...</div>;
  }

  if (error || !dictionary) {
    return <div className="text-center">Error getting dictionary</div>;
  }

  return (
    <DictionaryContext.Provider value={{ dictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
};
