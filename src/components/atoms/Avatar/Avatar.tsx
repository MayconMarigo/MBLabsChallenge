import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeUseContext } from "../../../theme/Theme";
import { AvatarProps } from "./interface";

const Avatar: React.FC<AvatarProps> = (props) => {
  const theme = ThemeUseContext();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.AVATAR_BACKGROUND,
        width: props.width || 45,
        height: props.height || 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 99,
      }}
    >
      {false || props.icon ? (
        <Icon name="user" size={props.iconSize || 20} />
      ) : (
        <Text style={{ fontWeight: "500", color: theme.DEFAULT_TEXT_HEADER }}>
          {props.name}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default Avatar;
