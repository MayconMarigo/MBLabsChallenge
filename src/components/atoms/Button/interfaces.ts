import { ColorValue, TouchableOpacityProps } from "react-native";

export interface CustomButtonProps extends TouchableOpacityProps {
  bgColor?: ColorValue;
  textColor?: ColorValue;
  text: string;
  width?: string;
  indicatorColor?: ColorValue;
  loading: boolean;
}
