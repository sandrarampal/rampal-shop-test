import { createContext } from "react";

type TAuthContext = {
  token: string | null;
  setToken: (value: string | null) => void;
};

export const AuthContext = createContext<TAuthContext>({
  token: null,
  setToken: () => {},
});

export default AuthContext;
