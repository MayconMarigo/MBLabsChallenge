import { View, Text } from "react-native";
import CustomButton from "../../atoms/Button/Button";
import ViewWIthIcon from "../../molecules/ViewWIthIcon/ViewWIthIcon";
const AccountsNotLoggedSection = () => {
  return (
    <>
      <View style={{ marginTop: 18 }}>
        <ViewWIthIcon />
      </View>
      <View style={{ paddingHorizontal: 18, marginTop: 15 }}>
        <CustomButton text="Ir para eventos" />
      </View>
    </>
  );
};
export default AccountsNotLoggedSection;
