import { ReactNode } from "react";
import { CustomButtonProps } from "../Button/interfaces";

export interface CustomButtonWithIconProps extends CustomButtonProps {
  children: ReactNode;
}
