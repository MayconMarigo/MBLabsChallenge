import { ViewProps } from "react-native";

export interface TextWithDividerProps extends ViewProps {
  direction?: "row" | "row-reverse";
  text: string;
  marginVertical?: number;
}
