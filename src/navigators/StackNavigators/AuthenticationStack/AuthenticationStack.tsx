import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from "../../../components/pages/HomePage/HomePage";
import LoginPage from "../../../components/pages/LoginPage/LoginPage";
import RegisterPage from "../../../components/pages/RegisterPage/RegisterPage";

const AuthenticationStack = () => {
  const AuthenticationStack = createNativeStackNavigator();
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Home" component={HomePage} />
      <AuthenticationStack.Screen name="Login" component={LoginPage} />
      <AuthenticationStack.Screen name="Register" component={RegisterPage} />
    </AuthenticationStack.Navigator>
  );
};
export default AuthenticationStack;
