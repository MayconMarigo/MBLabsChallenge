import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { ThemeUseContext } from "../../../theme/Theme";
import Avatar from "../../atoms/Avatar/Avatar";
import CustomButton from "../../atoms/Button/Button";
import { AccountsHeaderProps } from "./interfaces";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../contexts/Authentication/Authentication";

const AccountsHeader: React.FC<AccountsHeaderProps> = (props) => {
  const theme = ThemeUseContext();
  const navigation = useNavigation();
  const { user } = useAuth();

  const [isLogged, setIsLogged] = useState<boolean>(user.isLogged);

  useEffect(() => {
    setIsLogged(user.isLogged);
  }, [user]);

  return (
    <LinearGradient
      style={{
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingBottom: 15,
        height: 180,
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
      colors={[
        theme.HEADER_GRADIENT,
        theme.HEADER_GRADIENT_TWO,
        theme.HEADER_GRADIENT_THREE,
      ]}
    >
      <View style={{ width: isLogged ? "50%" : "60%" }}>
        <Text
          style={{
            color: theme.DEFAULT_TEXT_HEADER,
            fontSize: theme.TITLE_FONT_SIZE,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          {isLogged ? `${props.name}` : "Entre para obter ingressos"}
        </Text>
        {!!props.button && isLogged && (
          <CustomButton
            text="Editar Perfil"
            width="100%"
            bgColor={theme.AVATAR_BACKGROUND}
            textColor={theme.DEFAULT_TEXT_HEADER}
          />
        )}
      </View>
      {!!props.avatarName && isLogged ? (
        <Avatar
          icon={true}
          name={props.avatarName}
          iconSize={60}
          width={100}
          height={100}
        />
      ) : (
        <CustomButton
          text="Entrar"
          width="30%"
          onPress={() => navigation.navigate("Login" as never)}
        />
      )}
    </LinearGradient>
  );
};
export default AccountsHeader;
