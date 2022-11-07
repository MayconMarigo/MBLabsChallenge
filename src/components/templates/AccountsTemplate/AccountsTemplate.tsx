import AccountsHeader from "../../molecules/AccountsHeader/AccountsHeader";
import AccountItemsSection from "../../organisms/AccountItemsSection/AccountItemsSection";
import { AccountsTemplateProps } from "./interfaces";

const AccountsTemplate: React.FC<AccountsTemplateProps> = (props) => {
  return (
    <>
      <AccountsHeader button avatarName="MB" name="MB Labs" />
      <AccountItemsSection content={props.content} />
    </>
  );
};
export default AccountsTemplate;
