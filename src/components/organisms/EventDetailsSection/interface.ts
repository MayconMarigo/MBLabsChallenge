import { Items } from "../../molecules/AccountsItems/interfaces";

export interface EventDetailsSectionProps {
  title: string;
  date: string | Date;
  city: string;
  UF: string;
  content: Array<Items>;
  description: string;
}
