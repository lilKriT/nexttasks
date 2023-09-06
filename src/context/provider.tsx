"use client";
import { createContext, useEffect, useState } from "react";
import IUser from "../types/IUser";
import { setTimeout } from "timers";

// Very simple context
export const AuthProvider = createContext<{
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}>({
  user: null,
  setUser: () => {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  // Attempting to get user from local storage
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "null"));
  }, []);

  // Saving user in local storage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthProvider.Provider value={{ user, setUser }}>
      {children}
    </AuthProvider.Provider>
  );
}
