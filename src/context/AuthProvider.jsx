import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "../utils/checkLs";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(checkLs());

  const [loading, setLoading] = useState(true);

  const isAuth = !!user;

  const updateUserInfo = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    }
  };

  const setIsAuth = (authStatus) => {
    if (!authStatus) {
      updateUserInfo(null);
    }
  };

  useState(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUserInfo,
        isAuth,
        setIsAuth,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
