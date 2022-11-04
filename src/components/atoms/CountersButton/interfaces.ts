import { TouchableOpacityProps } from "react-native";

export interface CountersButtonProps extends TouchableOpacityProps {
  type: "minus" | "plus";
}
