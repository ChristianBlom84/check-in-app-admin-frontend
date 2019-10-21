import React, { useState, createContext } from 'react';

export const AuthContext = createContext<Context | undefined>(undefined);

interface Context {
  authStatus: boolean;
  setAuthStatus: (authStatus: boolean) => void;
}

const AuthContextProvider: React.FC = props => {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
