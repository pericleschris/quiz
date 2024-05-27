"use client";
import userGet from "@/actions/user-get";
import React, { ReactNode, createContext } from "react";

interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ltik = urlParams.get("ltik");

    async function handleFetch() {
      if (ltik) {
        const response = await userGet(ltik);
        if (response.ok && response.data) {
          setUser(response.data);
        } else {
          console.error("Erro ao buscar o usuário: ", response.error);
        }
      }
    }

    handleFetch();
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserContext;
