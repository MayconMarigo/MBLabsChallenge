import { TouchableOpacityProps } from "react-native";

export interface Items {
  title: string;
  subtitle?: string;
  iconName?: string;
}

export interface AccountsItemsProps extends TouchableOpacityProps {
  content: Array<Items>;
}
