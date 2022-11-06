import { View } from "react-native";
import { AuthenticationPageContainerProps } from "./interfaces";

const AuthenticationPageContainer: React.FC<
  AuthenticationPageContainerProps
> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {children}
    </View>
  );
};
export default AuthenticationPageContainer;
