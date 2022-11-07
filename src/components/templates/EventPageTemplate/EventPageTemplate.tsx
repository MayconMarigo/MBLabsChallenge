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
  );
};
export default EventPageTemplate;
