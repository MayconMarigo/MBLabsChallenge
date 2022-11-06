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
import ContextsContainer from "./src/contexts";

export default function App() {
  return (
    <ContextsContainer>
      {/* <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <AbsoluteViewWithRoundedCorner />
        <View style={{ width: "90%" }}>
          <BackCircledButton />
        </View>
        <View
          style={{
            backgroundColor: "#98CAD5",
            width: "90%",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 25,
            borderRadius: 15,
            height: 400,
          }}
        >
          <Text style={{ marginBottom: 25 }}>ACESSAR MINHA CONTA</Text>
          <CustomInputWithIcon
            mv={10}
            icon
            placeholder="Usuário"
            iconName="user"
          />
          <CustomInputWithIcon
            mv={5}
            icon
            secureTextEntry
            placeholder="Senha"
            iconName="eye"
            onIconPress={() => alert("teste")}
          />
          <TouchableText
            style={{ alignSelf: "flex-start" }}
            text="Esqueci minha senha"
            fontSize={12}
          />
          <CustomButton
            mt={25}
            text="Entrar"
            bgColor="#41337A"
            textColor="#fff"
            width="50%"
          />
        </View>
        <View style={{ alignItems: "center", width: "90%" }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Não tem uma conta ainda?
          </Text>
          <TouchableText
            bold
            fontSize={20}
            textColor="#41337A"
            text="Cadastre-se já"
          />
        </View>
      </View> */}

      {/* <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <AbsoluteViewWithRoundedCorner inverse />
        <View style={{ width: "90%" }}>
          <BackCircledButton fontColor="#000" />
        </View>
        <View
          style={{
            backgroundColor: "#98CAD5",
            width: "90%",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 25,
            borderRadius: 15,
            height: 400,
          }}
        >
          <Text style={{ marginBottom: 25 }}>CADASTRAR MINHA CONTA</Text>
          <CustomInputWithIcon
            mv={10}
            placeholder="Nome completo"
            iconName="user"
          />
          <CustomInputWithIcon
            mv={10}
            icon
            placeholder="Email"
            iconName="user"
            keyboardType="email-address"
          />
          <CustomInputWithIcon
            mv={5}
            icon
            secureTextEntry
            placeholder="Senha"
            iconName="lock"
          />
          <CustomButton
            mt={25}
            text="CADASTRAR"
            bgColor="#41337A"
            textColor="#fff"
            width="50%"
            onPress={() => alert("Cadastro não implementado ainda!")}
          />
        </View>
        <View style={{ alignItems: "center", width: "90%" }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Já possui uma conta?
          </Text>
          <TouchableText bold fontSize={20} textColor="#fff" text="ENTRAR" />
        </View>
      </View> */}
      <ScrollView>
        {/* <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <AbsoluteViewWithRoundedCorner />
        <View style={{ width: "90%" }}>
          <BackCircledButton />
        </View>
        <View
          style={{
            backgroundColor: "#98CAD5",
            width: "90%",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 25,
            borderRadius: 15,
            height: 400,
          }}
        >
          <Text style={{ marginBottom: 25 }}>ACESSAR MINHA CONTA</Text>
          <CustomInputWithIcon
            mv={10}
            icon
            placeholder="Usuário"
            iconName="user"
          />
          <CustomInputWithIcon
            mv={5}
            icon
            secureTextEntry
            placeholder="Senha"
            iconName="eye"
            onIconPress={() => alert("teste")}
          />
          <TouchableText
            style={{ alignSelf: "flex-start" }}
            text="Esqueci minha senha"
            fontSize={12}
          />
          <CustomButton
            mt={25}
            text="Entrar"
            bgColor="#41337A"
            textColor="#fff"
            width="50%"
          />
        </View>
        <View style={{ alignItems: "center", width: "90%" }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Não tem uma conta ainda?
          </Text>
          <TouchableText
            bold
            fontSize={20}
            textColor="#41337A"
            text="Cadastre-se já"
          />
        </View>
      </View> */}

        {/* <Header avatarName="MB" name="MB Labs" />
        <TextWithDivider text="Fique por dentro" marginVertical={20} />
        <HorizontalAds content={[{ text: "teste" }, { text: "teste2" }]} />
        <TextWithDivider
          direction="row-reverse"
          text="Para os próximos dias"
          marginVertical={20}
        />
        <HorizontalEvents
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
        <TextWithDivider text="Conheça os organizadores" marginVertical={20} />
        <HorizontalOrganizers
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

        {/* <AccountsHeader button avatarName="MB" name="MB Labs" />
        <AccountsItems
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

        {/* <AccountsHeader name="Meu Carrinho" />
        <View style={{ marginTop: 18 }}>
          <ViewWIthIcon />
        </View>
        <View style={{ paddingHorizontal: 18, marginTop: 15 }}>
          <CustomButton text="Ir para eventos" />
        </View> */}

        {/* <EventImageView ImageURI="https://www.showtimeevent.com/images/main-slider/event-management-company.webp" />
        <View style={{ padding: 15, paddingBottom: 0 }}>
          <EventTitleWithSubtitle
            title="Eventão hein"
            date="28 de janeiro"
            city="Rolândia"
            UF="PR"
          />

          <EventWithCounterAndPrice />
        </View>
        <AccountsItems
          content={[
            {
              title: "Nome do organizador",
              subtitle: "Organizador do evento",
            },
          ]}
        />
        <View style={{ marginVertical: 15 }}>
          <TextWithDivider text="Descrição do evento" />
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </View>

        <View style={{ padding: 15 }}>
          <CustomButtonWithIcon text="Compartilhar Evento">
            <Icon name="share" size={24} />
          </CustomButtonWithIcon>
        </View> */}
      </ScrollView>
    </ContextsContainer>
  );
}
