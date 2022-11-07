import AccountsHeader from "../../molecules/AccountsHeader/AccountsHeader";
import AccountItemsSection from "../../organisms/AccountItemsSection/AccountItemsSection";
import { AccountsTemplateProps } from "./interfaces";

const AccountsTemplate: React.FC<AccountsTemplateProps> = (props) => {
  return (
    <>
      <AccountsHeader button avatarName="MB" name="MB Labs" />
      <AccountItemsSection content={props.content} />
      {/* [
          {
            title: "Cartões",
            subtitle: "Gerenciar seus cartões cadastrados",
            iconName: "credit-card-alt",
          },
          {
            title: "Minha conta",
            subtitle: "Gerenciar meus dados",
            iconName: "user",
          },
          {
            title: "Outras opções...",
            subtitle: "Gerenciar meus dados",
            iconName: "user",
          },
          {
            title: "Outras opções...",
            subtitle: "Gerenciar meus dados",
            iconName: "user",
          },
          {
            title: "Outras opções...",
            subtitle: "Gerenciar meus dados",
            iconName: "user",
          },
          {
            title: "Outras opções...",
            subtitle: "Gerenciar meus dados",
            iconName: "user",
          },
          {
            title: "Outras opções...",
            subtitle: "Gerenciar meus dados",
            iconName: "user",
          },
          {
            title: "Sair",
            iconName: "user",
          },
        ] */}
    </>
  );
};
export default AccountsTemplate;
