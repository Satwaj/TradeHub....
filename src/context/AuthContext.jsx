import { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "tradehub_user";

// Helper to get persisted user
const getPersistedUser = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getPersistedUser);
  const [authError, setAuthError] = useState("");

  const persistUser = (userData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const register = useCallback(async ({ name, email, password }) => {
    setAuthError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAuthError(data.message || "Registration failed");
        return false;
      }
      // Log them in after successful registration
      const userData = { name, email, avatar: name.charAt(0).toUpperCase() };
      persistUser(userData);
      return true;
    } catch (err) {
      setAuthError("Network error. Please try again later.");
      return false;
    }
  }, []);

  const login = useCallback(async ({ email, password }) => {
    setAuthError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAuthError(data.message || "Login failed");
        return false;
      }
      const userData = {
        name: data.user.name,
        email: data.user.email,
        avatar: data.user.name.charAt(0).toUpperCase(),
      };
      persistUser(userData);
      return true;
    } catch (err) {
      setAuthError("Network error. Please try again later.");
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const clearError = useCallback(() => setAuthError(""), []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, authError, clearError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
