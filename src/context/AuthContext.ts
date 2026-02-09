import { createContext } from "react";

type TAuthContext = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  token: string | null;
  setToken: (value: string | null) => void;
};

export const AuthContext = createContext<TAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  token: null,
  setToken: () => {},
});

export default AuthContext;
