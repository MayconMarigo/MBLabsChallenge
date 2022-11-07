import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useAuth } from "../../../contexts/Authentication/Authentication";
import BackCircledButton from "../../atoms/BackCircledButton/BackCircledButton";
import AbsoluteViewWithRoundedCorner from "../../molecules/AbsoluteViewWIthRoundedCorner/AbsoluteViewWithRoundedCorner";
import AuthenticationPageContainer from "../../molecules/AuthenticationPageContainer/AuthenticationPageContainer";
import AuthenticationFooterSection from "../../organisms/AuthenticationFooterSection/AuthenticationFooterSection";
import LoginAccountsSection from "../../organisms/LoginAccountsSection/LoginAccountsSection";

const LoginTemplate = () => {
  const navigation = useNavigation();
  const { user, signIn } = useAuth();

  return (
    <AuthenticationPageContainer>
      <AbsoluteViewWithRoundedCorner />
      <View style={{ width: "90%" }}>
        <BackCircledButton
          fontColor="#000"
          onPress={() => navigation.goBack()}
        />
      </View>
      <LoginAccountsSection
        onButtonPress={() => {
          signIn();
          navigation.goBack();
        }}
      />
      <AuthenticationFooterSection
        firstText="Ainda não tem uma conta?"
        secondText="CADASTRE-SE"
        secondTextColor={"#41337A"}
        onPress={() => navigation.navigate("Register" as never)}
      />
    </AuthenticationPageContainer>
  );
};
export default LoginTemplate;
