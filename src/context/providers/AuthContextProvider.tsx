import type { ReactNode } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../AuthContext";

type TCompProps = {
  children: ReactNode;
};

const AuthContextProvider = ({ children }: TCompProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null,
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
        token: token,
        setToken: setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
