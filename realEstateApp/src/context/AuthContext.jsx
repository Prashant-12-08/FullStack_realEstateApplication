import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({ _id: null });

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useUser() {
  const context = useContext(AuthContext);
  if (context === null) throw new Error('Your is not define');
  return context;
}

export { useUser, AuthProvider };
