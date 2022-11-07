import EventDetailsSection from "../../organisms/EventDetailsSection/EventDetailsSection";
import { EventPageTemplateProps } from "./intefaces";

const EventPageTemplate: React.FC<EventPageTemplateProps> = (props) => {
  return (
    <EventDetailsSection
      title={props.title}
      date={props.date}
      city={props.city}
      UF={props.UF}
      content={props.content}
      description={props.description}
    />
    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    // sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    // nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    // reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    // pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    // culpa qui officia deserunt mollit anim id est laborum."

    // [
    //     {
    //       title: "Nome do organizador",
    //       subtitle: "Informações do organizador",
    //     },
    //   ]
  );
};
export default EventPageTemplate;
