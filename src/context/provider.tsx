"use client";
import { createContext } from "react";
import IUser from "../types/IUser";

// Very simple context
export const AuthProvider = createContext<{ user: IUser | null }>({
  user: null,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider.Provider value={{ user: null }}>
      {children}
    </AuthProvider.Provider>
  );
}
