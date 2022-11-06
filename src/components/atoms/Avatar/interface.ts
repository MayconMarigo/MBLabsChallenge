import { TouchableOpacityProps } from "react-native";

export interface AvatarProps extends TouchableOpacityProps {
  name: string;
  icon?: boolean;
  width?: number;
  height?: number;
  iconSize?: number;
}
