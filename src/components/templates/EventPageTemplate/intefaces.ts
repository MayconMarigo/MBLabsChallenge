import { Items } from "../../molecules/AccountsItems/interfaces";

export interface EventPageTemplateProps {
  title: string;
  date: string | Date;
  city: string;
  UF: string;
  content: Items[];
  description: string;
}
