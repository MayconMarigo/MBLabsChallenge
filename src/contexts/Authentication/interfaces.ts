import React, { ReactNode, useContext } from "react";

export interface User {
  email?: string;
  password?: string;
  fullName: string;
  isLogged: boolean;
}

export interface AuthenticationProps {
  children: ReactNode;
}

export interface AuthContextData {
  signIn: any;
  user: User;
}
