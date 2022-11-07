import { ScrollView } from "react-native";
import Header from "../../molecules/Header/Header";
import AdsSection from "../../organisms/AdsSection/AdsSection";
import EventsSection from "../../organisms/EventsSection/EventsSection";
import OrganizersSection from "../../organisms/OrganizersSection/OrganizersSection";
import { HomeTemplateProps } from "./interfaces";

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  return (
    <ScrollView>
      <Header avatarName="MB" name="Olá, MB Labs" />
      <AdsSection content={props.AdContent} />
      {/* [{ text: "teste" }, { text: "teste2" }] */}
      <EventsSection content={props.EventsContent} />
      {/* [
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
        ] */}
      <OrganizersSection content={props.OrganizerContent} />
      {/* [
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
        ] */}
    </ScrollView>
  );
};
export default HomeTemplate;
