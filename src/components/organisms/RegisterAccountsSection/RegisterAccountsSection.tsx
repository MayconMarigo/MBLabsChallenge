import { View, Text } from "react-native";
import { useState } from "react";
import CustomButton from "../../atoms/Button/Button";
import CustomInputWithIcon from "../../molecules/CustomInputWithIcon/CustomInputWithIcon";

const RegisterAccountsSection = () => {
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
      <Text style={{ marginBottom: 25 }}>CADASTRAR MINHA CONTA</Text>
      <CustomInputWithIcon
        mv={10}
        placeholder="Nome completo"
        iconName="user"
      />
      <CustomInputWithIcon
        mv={10}
        icon
        placeholder="Email"
        iconName="user"
        keyboardType="email-address"
      />
      <CustomInputWithIcon
        mv={5}
        icon
        secureTextEntry={!secure}
        placeholder="Senha"
        iconName="lock"
        onIconPress={() => setSecure(!secure)}
      />
      <CustomButton
        mt={25}
        text="CADASTRAR"
        bgColor="#41337A"
        textColor="#fff"
        width="50%"
        onPress={() => alert("Cadastro não implementado ainda!")}
      />
    </View>
  );
};
export default RegisterAccountsSection;
