import React from "react";
import { ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import BackCircledButton from "./src/components/atoms/BackCircledButton/BackCircledButton";
import CustomButton from "./src/components/atoms/Button/Button";
import CustomButtonWithIcon from "./src/components/atoms/ButtonWithIcon/ButtonWithIcon";
import AbsoluteViewWithRoundedCorner from "./src/components/molecules/AbsoluteViewWIthRoundedCorner/AbsoluteViewWithRoundedCorner";
import AccountsHeader from "./src/components/molecules/AccountsHeader/AccountsHeader";
import AccountsItems from "./src/components/molecules/AccountsItems/AccountsItems";
import AuthenticationPageContainer from "./src/components/molecules/AuthenticationPageContainer/AuthenticationPageContainer";
import CustomInputWithIcon from "./src/components/molecules/CustomInputWithIcon/CustomInputWithIcon";
import EventImageView from "./src/components/molecules/EventImageView/EventImageView";
import EventTitleWithSubtitle from "./src/components/molecules/EventTitleWIthSubtitle/EventTitleWIthSubtitle";
import EventWithCounterAndPrice from "./src/components/molecules/EventWithCounterAndPrice/EventWithCounterAndPrice";
import Header from "./src/components/molecules/Header/Header";
import HorizontalAds from "./src/components/molecules/HorizontalAds/HorizontalAds";
import HorizontalEvents from "./src/components/molecules/HorizontalEvents/HorizontalEvents";
import HorizontalOrganizers from "./src/components/molecules/HorizontalOrganizers/HorizontalOrganizers";
import TextWithDivider from "./src/components/molecules/TextWithDivider/TextWithDivider";
import TouchableText from "./src/components/molecules/TouchableText/TouchableText";
import ViewWIthIcon from "./src/components/molecules/ViewWIthIcon/ViewWIthIcon";
import AccountItemsSection from "./src/components/organisms/AccountItemsSection/AccountItemsSection";
import AccountsNotLoggedSection from "./src/components/organisms/AccountsNotLoggedSection/AccountsNotLoggedSection";
import AdsSection from "./src/components/organisms/AdsSection/AdsSection";
import AuthenticationFooterSection from "./src/components/organisms/AuthenticationFooterSection/AuthenticationFooterSection";
import EventDetailsSection from "./src/components/organisms/EventDetailsSection/EventDetailsSection";
import EventsSection from "./src/components/organisms/EventsSection/EventsSection";
import LoginAccountsSection from "./src/components/organisms/LoginAccountsSection/LoginAccountsSection";
import OrganizersSection from "./src/components/organisms/OrganizersSection/OrganizersSection";
import RegisterAccountsSection from "./src/components/organisms/RegisterAccountsSection/RegisterAccountsSection";
import ContextsContainer from "./src/contexts";

export default function App() {
  return (
    <ContextsContainer>
      {/* ---- DONE ----- */}
      {/* <AuthenticationPageContainer>
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
      </AuthenticationPageContainer> */}

      {/* <ScrollView> */}

      {/* ---- DONE ----- */}
      {/* <AuthenticationPageContainer>
        <AbsoluteViewWithRoundedCorner />
        <View style={{ width: "90%" }}>
          <BackCircledButton />
        </View>
        <LoginAccountsSection />
        <AuthenticationFooterSection
          firstText="Ainda não tem uma conta?"
          secondText="CADASTRE-SE"
        />
      </AuthenticationPageContainer> */}

      {/* ---- DONE ----- */}
      {/* <Header avatarName="MB" name="Olá, MB Labs" />
        <AdsSection content={[{ text: "teste" }, { text: "teste2" }]} />
        <EventsSection
          content={[
            {
              title: "Eventão hein!!",
              date: "28 de novembro",
              city: "Londrina",
              UF: "PR",
            },
            {
              title: "Outro Eventão hein",
              date: "12 de dezembro",
              city: "Maringá",
              UF: "PR",
            },
          ]}
        />
        <OrganizersSection
          content={[
            {
              title: "Organizador TOP 1",
              city: "Londrina",
              UF: "PR",
            },
            {
              title: "Esse é bom também",
              city: "Cambé",
              UF: "PR",
            },
          ]}
        /> */}

      {/* ---- DONE ----- */}
      {/* <AccountsHeader button avatarName="MB" name="MB Labs" />
        <AccountItemsSection
          content={[
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
          ]}
        /> */}

      {/* ---- DONE ----- */}
      {/* <AccountsHeader name="Meu Carrinho" />
        <AccountsNotLoggedSection /> */}

      {/* ---- DONE ----- */}
      {/* <EventDetailsSection
          title="Eventão Hein"
          date="28 de Novembro"
          city="Londrina"
          UF="PR"
          content={[
            {
              title: "Nome do organizador",
              subtitle: "Informações do organizador",
            },
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        /> */}
      {/* </ScrollView> */}
    </ContextsContainer>
  );
}
