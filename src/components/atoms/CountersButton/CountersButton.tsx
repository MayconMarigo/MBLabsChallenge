import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { ThemeUseContext } from "../../../theme/Theme";
import { CountersButtonProps } from "./interfaces";

const CountersButton: React.FC<CountersButtonProps> = (props) => {
  const theme = ThemeUseContext();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.PLUS_MINUS_BUTTONS_BACKGROUND,
        width: 30,
        height: 30,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon name={props.type} size={20} />
    </TouchableOpacity>
  );
};
export default CountersButton;
