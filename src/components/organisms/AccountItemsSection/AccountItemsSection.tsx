import { View, Text } from "react-native";
import AccountsItems from "../../molecules/AccountsItems/AccountsItems";
import { AccountItemsSectionProps } from "./interfaces";
const AccountItemsSection: React.FC<AccountItemsSectionProps> = (props) => {
  return (
    <>
      <AccountsItems content={props.content} />
    </>
  );
};
export default AccountItemsSection;
