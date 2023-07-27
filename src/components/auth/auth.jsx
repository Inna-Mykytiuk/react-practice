import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const login = ({ user, email, password }) => {
    setUser(user);
    setCredentials({ email, password });
  };

  const logout = () => {
    setUser(null);
    setCredentials({ email: '', password: '' });
  };

  return (
    <AuthContext.Provider value={{ user, credentials, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

