import { View, Text } from "react-native";
import BackCircledButton from "../../atoms/BackCircledButton/BackCircledButton";
import AbsoluteViewWithRoundedCorner from "../../molecules/AbsoluteViewWIthRoundedCorner/AbsoluteViewWithRoundedCorner";
import AuthenticationPageContainer from "../../molecules/AuthenticationPageContainer/AuthenticationPageContainer";
import AuthenticationFooterSection from "../../organisms/AuthenticationFooterSection/AuthenticationFooterSection";
import LoginAccountsSection from "../../organisms/LoginAccountsSection/LoginAccountsSection";
const RegisterTemplate = () => {
  return (
    <AuthenticationPageContainer>
      <AbsoluteViewWithRoundedCorner />
      <View style={{ width: "90%" }}>
        <BackCircledButton />
      </View>
      <LoginAccountsSection />
      <AuthenticationFooterSection
        firstText="Ainda não tem uma conta?"
        secondText="CADASTRE-SE"
      />
    </AuthenticationPageContainer>
  );
};
export default RegisterTemplate;
