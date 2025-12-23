import { createContext } from "react";

export const AuthContext = createContext({
  user: null,
  updateUserInfo: () => {},
  isAuth: false,
  setIsAuth: () => {},
  loading: true,
  setLoading: () => {},
});
