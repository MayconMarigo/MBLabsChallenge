import { View, Text } from "react-native";
import HorizontalOrganizers from "../../molecules/HorizontalOrganizers/HorizontalOrganizers";
import TextWithDivider from "../../molecules/TextWithDivider/TextWithDivider";
import { OrganizersSectionProps } from "./interfaces";

const OrganizersSection: React.FC<OrganizersSectionProps> = (props) => {
  return (
    <>
      <TextWithDivider text="Conheça os organizadores" marginVertical={20} />
      <HorizontalOrganizers content={props.content} />
    </>
  );
};
export default OrganizersSection;
