"use client";
import { createContext, useEffect, useState } from "react";
import IUser from "../types/IUser";

// Very simple context
export const AuthProvider = createContext<{
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  test: string;
}>({
  user: null,
  setUser: () => {},
  test: "initial test",
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  //   Getting local storage
  //   useEffect(() => {
  //     if (localStorage.getItem("user") !== null) {
  //       console.log("user: ", localStorage.getItem("user"));
  //       setUser(JSON.parse("abc"));
  //     }
  //   }, []);

  //   Setting local storage
  //   useEffect(() => {
  //     if (user !== null) {
  //       localStorage.setItem("user", JSON.stringify(user));
  //     } else {
  //       localStorage.removeItem("user");
  //     }
  //   }, [user]);
  return (
    <AuthProvider.Provider value={{ user, setUser, test: "second test" }}>
      {children}
    </AuthProvider.Provider>
  );
}
