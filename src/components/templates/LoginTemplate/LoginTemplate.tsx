import { View } from "react-native";
import BackCircledButton from "../../atoms/BackCircledButton/BackCircledButton";
import AbsoluteViewWithRoundedCorner from "../../molecules/AbsoluteViewWIthRoundedCorner/AbsoluteViewWithRoundedCorner";
import AuthenticationPageContainer from "../../molecules/AuthenticationPageContainer/AuthenticationPageContainer";
import AuthenticationFooterSection from "../../organisms/AuthenticationFooterSection/AuthenticationFooterSection";
import RegisterAccountsSection from "../../organisms/RegisterAccountsSection/RegisterAccountsSection";

const LoginTemplate = () => {
  return (
    <AuthenticationPageContainer>
      <AbsoluteViewWithRoundedCorner inverse />
      <View style={{ width: "90%" }}>
        <BackCircledButton fontColor="#000" />
      </View>
      <RegisterAccountsSection />
      <AuthenticationFooterSection
        firstText="Já possui uma conta?"
        secondText="ENTRAR"
        secondTextColor="#fff"
      />
    </AuthenticationPageContainer>
  );
};
export default LoginTemplate;
