import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { ThemeUseContext } from "../../../theme/Theme";
import Avatar from "../../atoms/Avatar/Avatar";
import CustomButton from "../../atoms/Button/Button";
import { HeaderProps } from "./interface";

const Header: React.FC<HeaderProps> = (props) => {
  const theme = ThemeUseContext();

  const [isLogged, setIsLogged] = useState<boolean>(true);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: 20,
        paddingHorizontal: isLogged ? 15 : 5,
        paddingBottom: 10,
        height: props.height || 100,
        alignItems: "flex-end",
        justifyContent: "space-between",
        backgroundColor: theme.HEADER_GRADIENT,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Avatar icon={!isLogged} name={props.avatarName} />
        <View style={{ paddingLeft: 9 }}>
          <Text
            style={{
              color: theme.DEFAULT_TEXT_HEADER,
              fontSize: theme.TITLE_FONT_SIZE,
              fontWeight: "700",
            }}
          >
            {isLogged ? `Olá, ${props.name}` : "Entrar e obter ingressos"}
          </Text>
          <Text
            style={{
              color: theme.DEFAULT_TEXT_HEADER_OPACITY,
              fontSize: theme.SUBTITLE_FONT_SIZE,
            }}
          >
            {isLogged ? "Qual o evento de hoje?" : "Ou registre-se"}
          </Text>
        </View>
      </View>
      {isLogged ? (
        <TouchableOpacity style={{ paddingBottom: 4 }}>
          <Icon name="ticket" size={29} color={theme.DEFAULT_TEXT_HEADER} />
        </TouchableOpacity>
      ) : (
        <CustomButton
          mb={6}
          text="Entrar"
          width="30%"
          bgColor={theme.AVATAR_BACKGROUND}
          textColor={theme.DEFAULT_TEXT_HEADER}
        />
      )}
    </View>
  );
};
export default Header;
