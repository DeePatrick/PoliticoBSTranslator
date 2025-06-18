import { PropsWithChildren, createContext } from "react";
import { useGetCurrentUserQuery } from "../api/downloaderMainApi";
import { CurrentUserData } from "../api/types";
import { useDictionary } from "../hooks/DictionaryHook";

interface CurrentUserContextType {
  currentUser: CurrentUserData | null;
}

export const CurrentUserContext = createContext<CurrentUserContextType | null>(
  null,
);

export const CurrentUserProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { data: currentUser, isLoading, error } = useGetCurrentUserQuery(),
    getDictionaryKey = useDictionary();

  if (isLoading) {
    return (
      <div className="text-center">{getDictionaryKey("user_loading")}</div>
    );
  }

  if (error || !currentUser) {
    return <div className="text-center">{getDictionaryKey("user_error")}</div>;
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
