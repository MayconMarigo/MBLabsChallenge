import AccountsHeader from "../../molecules/AccountsHeader/AccountsHeader";
import AccountsNotLoggedSection from "../../organisms/AccountsNotLoggedSection/AccountsNotLoggedSection";

const MyCartTemplate = () => {
  return (
    <>
      <AccountsHeader name="Meu Carrinho" />
      <AccountsNotLoggedSection />
    </>
  );
};
export default MyCartTemplate;
