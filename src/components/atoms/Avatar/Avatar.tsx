import { Text, TouchableOpacity } from "react-native";
import { ThemeUseContext } from "../../../theme/Theme";
import { AvatarProps } from "./interface";

const Avatar: React.FC<AvatarProps> = (props) => {
  const theme = ThemeUseContext();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.AVATAR_BACKGROUND,
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 99,
      }}
    >
      <Text style={{ fontWeight: "500", color: theme.DEFAULT_TEXT_HEADER }}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};
export default Avatar;
