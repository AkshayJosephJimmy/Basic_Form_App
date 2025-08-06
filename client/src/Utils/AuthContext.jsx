// AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ role: null, loading: true });

  // Verify token on first render
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuth({ role: null, loading: false });
      return;
    }

    axios
      .get("http://localhost:5700/verify-token", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.valid) {
          setAuth({ role: res.data.user.username, loading: false });
        } else {
          localStorage.removeItem("token");
          setAuth({ role: null, loading: false });
        }
      })
      .catch(() => {
        localStorage.removeItem("token");
        setAuth({ role: null, loading: false });
      });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}