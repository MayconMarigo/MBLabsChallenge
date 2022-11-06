import { View, Text } from "react-native";
import TouchableText from "../../molecules/TouchableText/TouchableText";
import { AuthenticationFooterSectionProps } from "./interfaces";

const AuthenticationFooterSection: React.FC<
  AuthenticationFooterSectionProps
> = (props) => {
  return (
    <View style={{ alignItems: "center", width: "90%" }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>{props.firstText}</Text>
      <TouchableText
        bold
        fontSize={20}
        textColor={props.secondTextColor || "#41337A"}
        text={props.secondText}
      />
    </View>
  );
};
export default AuthenticationFooterSection;
