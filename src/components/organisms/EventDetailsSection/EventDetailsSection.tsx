import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import CustomButtonWithIcon from "../../atoms/ButtonWithIcon/ButtonWithIcon";
import AccountsItems from "../../molecules/AccountsItems/AccountsItems";
import EventImageView from "../../molecules/EventImageView/EventImageView";
import EventTitleWithSubtitle from "../../molecules/EventTitleWIthSubtitle/EventTitleWIthSubtitle";
import EventWithCounterAndPrice from "../../molecules/EventWithCounterAndPrice/EventWithCounterAndPrice";
import TextWithDivider from "../../molecules/TextWithDivider/TextWithDivider";
import { EventDetailsSectionProps } from "./interface";

const EventDetailsSection: React.FC<EventDetailsSectionProps> = (props) => {
  return (
    <>
      <EventImageView ImageURI="https://www.showtimeevent.com/images/main-slider/event-management-company.webp" />
      <View style={{ padding: 15, paddingBottom: 0 }}>
        <EventTitleWithSubtitle
          title={props.title}
          date={props.date}
          city={props.city}
          UF={props.UF}
        />

        <EventWithCounterAndPrice />
      </View>
      <AccountsItems content={props.content} />
      <View style={{ marginVertical: 15 }}>
        <TextWithDivider text="Descrição do evento" />
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        <Text>{props.description}</Text>
      </View>

      <View style={{ padding: 15 }}>
        <CustomButtonWithIcon text="Compartilhar Evento">
          <Icon name="share" size={24} />
        </CustomButtonWithIcon>
      </View>
    </>
  );
};
export default EventDetailsSection;
