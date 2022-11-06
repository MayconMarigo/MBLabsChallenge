import { TouchableOpacityProps, ColorValue } from "react-native";

export interface TouchableTextProps extends TouchableOpacityProps {
  text: string;
  textColor?: ColorValue;
  fontSize?: number;
  bold?: boolean;
}
