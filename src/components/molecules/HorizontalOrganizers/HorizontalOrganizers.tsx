import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeUseContext } from "../../../theme/Theme";
import { HorizontalOrganizersProps, OrganizerProps } from "./interfaces";

const HorizontalOrganizers: React.FC<HorizontalOrganizersProps> = (props) => {
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
          props.content.map((event: OrganizerProps, index: number) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  style={{
                    height: 150,
                    width: Dimensions.get("screen").width * 0.55,
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
                    width: Dimensions.get("screen").width * 0.55,
                  }}
                >
                  <Text
                    style={{
                      color: theme.DEFAULT_TEXT,
                      fontSize: theme.TITLE_FONT_SIZE,
                      fontWeight: "700",
                    }}
                  >
                    {event.title}
                  </Text>
                  <Text
                    style={{
                      color: theme.DEFAULT_TEXT_OPACITY,
                      fontSize: theme.SUBTITLE_FONT_SIZE,
                    }}
                  >{`${event.city} / ${event.UF}`}</Text>
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};
export default HorizontalOrganizers;
