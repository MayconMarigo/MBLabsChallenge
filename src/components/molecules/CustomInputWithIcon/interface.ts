import { TextInputProps, ColorValue } from "react-native";

export interface CustomInputWithIconProps extends TextInputProps {
  iconName: string;
  icon?: boolean;
  bgColor?: ColorValue;
  border?: boolean;
  borderColor?: ColorValue;
  mv?: number;
  onIconPress?: () => any;
}
