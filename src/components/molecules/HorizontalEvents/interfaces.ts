export interface EventsProps {
  text?: string;
  title: string;
  date: string | Date;
  city: string;
  UF: string;
}
export interface HorizontalEventsProps {
  content: EventsProps[];
}
