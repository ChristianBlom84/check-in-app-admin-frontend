import React, { useState, createContext } from 'react';

export const AuthContext = createContext<Context | undefined>(undefined);

interface Context {
  authStatus: boolean;
  setAuthStatus: (authStatus: boolean) => void;
  role: UserRoles;
  setRole: (role: UserRoles) => void;
}

export enum UserRoles {
  Standard,
  Admin
}

const AuthContextProvider: React.FC = props => {
  const [authStatus, setAuthStatus] = useState(false);
  const [role, setRole] = useState(UserRoles.Standard);

  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus, role, setRole }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
