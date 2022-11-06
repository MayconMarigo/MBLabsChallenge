import { View, Text, TouchableOpacity } from "react-native";
import { TouchableTextProps } from "./interfaces";

const TouchableText: React.FC<TouchableTextProps> = (props) => {
  return (
    <TouchableOpacity {...props}>
      <Text
        style={{
          color: props.textColor,
          fontSize: props.fontSize,
          fontWeight: props.bold ? "700" : "400",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
export default TouchableText;
