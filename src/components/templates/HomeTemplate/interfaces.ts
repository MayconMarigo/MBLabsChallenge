import { AdProps } from "../../molecules/HorizontalAds/interfaces";
import { EventsProps } from "../../molecules/HorizontalEvents/interfaces";
import { OrganizerProps } from "../../molecules/HorizontalOrganizers/interfaces";

export interface HomeTemplateProps {
  OrganizerContent: OrganizerProps[];
  EventsContent: EventsProps[];
  AdContent: AdProps[];
}
