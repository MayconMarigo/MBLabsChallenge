import { View, Text } from "react-native";
import { useState } from "react";
import CustomButton from "../../atoms/Button/Button";
import CustomInputWithIcon from "../../molecules/CustomInputWithIcon/CustomInputWithIcon";
import TouchableText from "../../molecules/TouchableText/TouchableText";
const LoginAccountsSection = () => {
  const [secure, setSecure] = useState<boolean>(false);

  return (
    <View
      style={{
        backgroundColor: "#98CAD5",
        width: "90%",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius: 15,
        height: 400,
      }}
    >
      <Text style={{ marginBottom: 25 }}>ACESSAR MINHA CONTA</Text>
      <CustomInputWithIcon mv={10} icon placeholder="Usuário" iconName="user" />
      <CustomInputWithIcon
        mv={5}
        icon
        secureTextEntry={!secure}
        placeholder="Senha"
        iconName="eye"
        onIconPress={() => setSecure(!secure)}
      />
      <TouchableText
        style={{ alignSelf: "flex-start" }}
        text="Esqueci minha senha"
        fontSize={12}
      />
      <CustomButton
        mt={25}
        text="Entrar"
        bgColor="#41337A"
        textColor="#fff"
        width="50%"
      />
    </View>
  );
};
export default LoginAccountsSection;
