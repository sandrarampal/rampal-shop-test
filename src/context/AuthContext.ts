import { createContext } from "react";

type TAuthContext = {
  token: string | null;
  setToken: (value: string | null) => void;
  setIsAdmin?: (value: boolean) => void;
  isAdmin?: boolean;
};

export const AuthContext = createContext<TAuthContext>({
  token: null,
  setToken: () => {},
  setIsAdmin: () => {},
  isAdmin: false,
});

export default AuthContext;
