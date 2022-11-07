import EventPageTemplate from "../../templates/EventPageTemplate/EventPageTemplate";
import { ScrollView } from "react-native";

const EventPage = () => {
  return (
    <ScrollView>
      <EventPageTemplate
        title="Eventão número um!"
        date="30 de março"
        city="Arapongas"
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
      />
    </ScrollView>
  );
};
export default EventPage;
