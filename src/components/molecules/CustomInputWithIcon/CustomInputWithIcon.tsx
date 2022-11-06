import { TextInput, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeUseContext } from "../../../theme/Theme";
import { CustomInputWithIconProps } from "./interface";
const CustomInputWithIcon: React.FC<CustomInputWithIconProps> = (props) => {
  const theme = ThemeUseContext();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: props.border ? 1 : 0,
        borderColor: props.borderColor || "#000",
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: props.bgColor || theme.INPUT_BACKGROUND,
        height: 60,
        marginVertical: props.mv,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          backgroundColor: props.bgColor || theme.INPUT_BACKGROUND,
          color: "#424242",
        }}
        placeholder={props.placeholder}
        {...props}
      />
      {!!props.icon && (
        <TouchableOpacity onPress={props.onIconPress}>
          <Icon name={props.iconName} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default CustomInputWithIcon;
