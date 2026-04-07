import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

const STORAGE_KEY = 'tradehub_user';

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
  const [authError, setAuthError] = useState('');

  const persistUser = (userData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const register = useCallback(({ name, email, password }) => {
    setAuthError('');
    // Check if user already exists
    const existing = localStorage.getItem(`tradehub_account_${email}`);
    if (existing) {
      setAuthError('An account with this email already exists.');
      return false;
    }
    // Save account
    const account = { name, email, password };
    localStorage.setItem(`tradehub_account_${email}`, JSON.stringify(account));
    // Log them in
    const userData = { name, email, avatar: name.charAt(0).toUpperCase() };
    persistUser(userData);
    return true;
  }, []);

  const login = useCallback(({ email, password }) => {
    setAuthError('');
    const raw = localStorage.getItem(`tradehub_account_${email}`);
    if (!raw) {
      setAuthError('No account found with this email.');
      return false;
    }
    const account = JSON.parse(raw);
    if (account.password !== password) {
      setAuthError('Incorrect password. Please try again.');
      return false;
    }
    const userData = { name: account.name, email: account.email, avatar: account.name.charAt(0).toUpperCase() };
    persistUser(userData);
    return true;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const clearError = useCallback(() => setAuthError(''), []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, authError, clearError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
