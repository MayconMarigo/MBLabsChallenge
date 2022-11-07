import React, { useContext, useMemo, useState } from "react";
import { AuthContextData, AuthenticationProps, User } from "./interfaces";


const AuthContext = React.createContext({} as AuthContextData);
const AuthProvider: React.FC<AuthenticationProps> = ({ children }) => {

  const [user, setUser] = useState<User>({});

  const signIn = () => {
    setUser({ fullName: "MB Labs", isLogged: true });
  };

  const providerValue = useMemo(
    () => ({
      signIn,
      user,
    }),
    [signIn, user]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
export { useAuth, AuthProvider };
