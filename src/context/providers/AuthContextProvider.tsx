import type { ReactNode } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../AuthContext";

type TCompProps = {
  children: ReactNode;
};

const AuthContextProvider = ({ children }: TCompProps) => {
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null,
  );
  const [isAdmin, setIsAdmin] = useState<boolean>(
    Cookies.get("isAdmin") === "true" || false,
  );

  return (
    <AuthContext.Provider
      value={{
        token: token,
        setToken: setToken,
        setIsAdmin: setIsAdmin,
        isAdmin: isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
