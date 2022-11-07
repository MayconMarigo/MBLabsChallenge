import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import BackCircledButton from "../../atoms/BackCircledButton/BackCircledButton";
import AbsoluteViewWithRoundedCorner from "../../molecules/AbsoluteViewWIthRoundedCorner/AbsoluteViewWithRoundedCorner";
import AuthenticationPageContainer from "../../molecules/AuthenticationPageContainer/AuthenticationPageContainer";
import AuthenticationFooterSection from "../../organisms/AuthenticationFooterSection/AuthenticationFooterSection";
import LoginAccountsSection from "../../organisms/LoginAccountsSection/LoginAccountsSection";
import RegisterAccountsSection from "../../organisms/RegisterAccountsSection/RegisterAccountsSection";
const RegisterTemplate = () => {
  const navigation = useNavigation();
  return (
    <AuthenticationPageContainer>
      <AbsoluteViewWithRoundedCorner inverse />
      <View style={{ width: "90%" }}>
        <BackCircledButton onPress={() => navigation.goBack()} />
      </View>
      <RegisterAccountsSection />
      <AuthenticationFooterSection
        firstText="Já possui uma conta?"
        secondText="ENTRAR"
        secondTextColor={"#fff"}
        onPress={() => navigation.navigate("Login" as never)}
      />
    </AuthenticationPageContainer>
  );
};
export default RegisterTemplate;
