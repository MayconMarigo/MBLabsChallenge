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
      <EventsSection content={props.EventsContent} />
      <OrganizersSection content={props.OrganizerContent} />
    </ScrollView>
  );
};
export default HomeTemplate;
