import { Text, TouchableOpacity } from "react-native";
import { ThemeUseContext } from "../../../theme/Theme";
import { CustomButtonWithIconProps } from "./interfaces";

const CustomButtonWithIcon: React.FC<CustomButtonWithIconProps> = (props) => {
  const theme = ThemeUseContext();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.loading
          ? theme.INSIDE_COMPONENT_LOADING
          : props.bgColor || theme.INSIDE_COMPONENT,
        width: props.width || "100%",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 12,
      }}
      {...props}
    >
      {props.children}
      <Text
        style={{
          fontWeight: "500",
          fontSize: theme.BUTTON_TEXT_SIZE,
          color: props.textColor || theme.DEFAULT_TEXT,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButtonWithIcon;
