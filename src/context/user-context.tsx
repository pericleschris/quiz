"use client";
import React from "react";

type LtikType = {
  ltik: string;
};

type PropsUserContext = {
  ltik: LtikType | null;
  setLtik: React.Dispatch<React.SetStateAction<LtikType | null>>;
};

const UserContext = React.createContext<PropsUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error("useContext deve estar dentro do Provider");
  }
  return context;
};

export function UserContextProvider({
  children,
  tokenLtik,
}: {
  children: React.ReactNode;
  tokenLtik: LtikType | null;
}) {
  const [ltik, setLtik] = React.useState<LtikType | null>(null);

  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const key = searchParams.get("ltik");
    if (key) {
      setLtik({ ltik: key });
    }
  }, []);

  return <UserContext.Provider value={{ ltik, setLtik }}>{children}</UserContext.Provider>;
}
