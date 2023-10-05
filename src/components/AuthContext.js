// AuthContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// Create the AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
