import { Text, TouchableOpacity } from "react-native";
import { ThemeUseContext } from "../../../theme/Theme";
import { CustomButtonProps } from "./interfaces";
import { ActivityIndicator } from "react-native";

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const theme = ThemeUseContext();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.loading
          ? theme.INSIDE_COMPONENT_LOADING
          : props.bgColor || theme.INSIDE_COMPONENT,
        width: props.width || "100%",
        height: 40,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        marginBottom: props.mb,
        marginTop: props.mt,
        marginVertical: props.mv,
      }}
      disabled={props.loading}
      onPress={props.onPress}
    >
      {props.loading ? (
        <ActivityIndicator color={props.indicatorColor || "#000"} size={24} />
      ) : (
        <Text
          style={{
            fontWeight: "500",
            fontSize: theme.BUTTON_TEXT_SIZE,
            color: props.textColor || theme.DEFAULT_TEXT,
          }}
        >
          {props.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
