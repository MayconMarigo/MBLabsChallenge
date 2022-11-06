import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import { ThemeUseContext } from "../../../theme/Theme";
import EventTitleWithSubtitle from "../EventTitleWIthSubtitle/EventTitleWIthSubtitle";
import { EventsProps, HorizontalEventsProps } from "./interfaces";

const HorizontalEvents: React.FC<HorizontalEventsProps> = (props) => {
  const theme = ThemeUseContext();

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 10,
        }}
      >
        {!!props.content &&
          props.content.map((event: EventsProps, index: number) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  style={{
                    height: 150,
                    width: Dimensions.get("screen").width * 0.75,
                    marginRight: 10,
                    borderRadius: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: theme.INSIDE_COMPONENT,
                  }}
                  onPress={() => alert(event.title)}
                />
                <View
                  style={{
                    paddingLeft: 8,
                    marginTop: 5,
                    width: Dimensions.get("screen").width * 0.75,
                  }}
                >
                  <EventTitleWithSubtitle
                    title={event.title}
                    date={event.date}
                    city={event.city}
                    UF={event.UF}
                  />
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};
export default HorizontalEvents;
