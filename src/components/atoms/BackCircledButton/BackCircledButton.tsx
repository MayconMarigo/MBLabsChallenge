import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeUseContext } from "../../../theme/Theme";
import { BackCircledButtonProps } from "./interfaces";

const BackCircledButton: React.FC<BackCircledButtonProps> = (props) => {
  const themes = ThemeUseContext();
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: themes.DEFAULT_TEXT,
          width: 34,
          height: 34,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 999,
          ...props,
        }}
        onPress={() => props.onPress()}
      >
        <Icon name="chevron-left" color={themes.DEFAULT_TEXT_HEADER} />
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: 10,
          fontWeight: "700",
          color: props.fontColor || themes.DEFAULT_TEXT_HEADER,
        }}
      >
        Voltar
      </Text>
    </View>
  );
};
export default BackCircledButton;
