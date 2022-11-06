import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { ThemeUseContext } from "../../../theme/Theme";
import { ViewWIthIconProps } from "./interfaces";

const ViewWIthIcon: React.FC<ViewWIthIconProps> = (props) => {
  const theme = ThemeUseContext();
  return (
    <View
      style={{
        backgroundColor: theme.INSIDE_COMPONENT,
        width: "90%",
        height: 150,
        borderRadius: 12,
        marginVertical: props.mv,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "space-around",
      }}
    >
      <View
        style={{ width: "40%", alignItems: "center", justifyContent: "center" }}
      >
        <Icon name="shopping-bag-1" size={65} />
      </View>
      <View style={{ width: "60%" }}>
        <Text
          style={{
            color: theme.DEFAULT_TEXT,
            fontSize: theme.SUBTITLE_FONT_SIZE,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Me parece que você ainda nao {"\n"} realizou nenhuma compra ainda :(
        </Text>
      </View>
    </View>
  );
};
export default ViewWIthIcon;
