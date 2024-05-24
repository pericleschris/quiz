"use client";
import { fetchUserData } from "@/actions/user-get";
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

    if (ltik) {
      fetchUserData(ltik)
        .then((data) => {
          setUser(data);
        })
        .catch((error: string) => {
          console.error("Error fetching user data:", error);
        });
    } else {
    }
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserContext;
