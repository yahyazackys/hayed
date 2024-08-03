"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  token: string | null;
  user: string | null;
  setToken: (token: string) => void;
  setUser: (user: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [user, setUserState] = useState<string | null>(null);

  // Ambil token dan user dari local storage saat komponen dimuat
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken) {
      setTokenState(storedToken);
    }
    if (storedUser) {
      setUserState(storedUser);
    }
  }, []);

  // Fungsi untuk set token dan simpan ke local storage
  const setToken = (token: string) => {
    localStorage.setItem("token", token);
    setTokenState(token);
  };

  // Fungsi untuk set user dan simpan ke local storage
  const setUser = (user: string) => {
    localStorage.setItem("user", user);
    setUserState(user);
  };

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
