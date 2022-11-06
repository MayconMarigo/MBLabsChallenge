import { Text, View } from "react-native";
import { ThemeUseContext } from "../../../theme/Theme";
import { TextWithDividerProps } from "./interface";

const TextWithDivider: React.FC<TextWithDividerProps> = (props) => {
  const themes = ThemeUseContext();
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: props.direction || "row",
        marginVertical: props.marginVertical,
      }}
    >
      <Text
        style={{
          color: themes.DEFAULT_TEXT,
          paddingHorizontal: 15,
          fontWeight: "500",
        }}
      >
        {props.text}
      </Text>
      <View
        style={{
          flex: 1,
          height: 3,
          backgroundColor: themes.INSIDE_COMPONENT,
        }}
      />
    </View>
  );
};
export default TextWithDivider;
