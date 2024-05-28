"use client";
import userGet from "@/actions/user-get";
import React, { ReactNode, createContext, useContext } from "react";

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
    async function handleFetch() {
      const response = await userGet();
      if (response.ok && response.data) {
        setUser(response.data);
      } else {
        console.error("Erro ao buscar o usuário: ", response.error);
      }
    }

    handleFetch();
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useContext deve estar dentro do Provider");
  }
  return context;
};

export default UserContext;
