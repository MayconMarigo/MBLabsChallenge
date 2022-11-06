import HorizontalEvents from "../../molecules/HorizontalEvents/HorizontalEvents";
import TextWithDivider from "../../molecules/TextWithDivider/TextWithDivider";
import { EventsSectionProps } from "./interfaces";

const EventsSection: React.FC<EventsSectionProps> = (props) => {
  return (
    <>
      <TextWithDivider
        direction="row-reverse"
        text="Para os próximos dias"
        marginVertical={20}
      />
      <HorizontalEvents content={props.content} />
    </>
  );
};
export default EventsSection;
