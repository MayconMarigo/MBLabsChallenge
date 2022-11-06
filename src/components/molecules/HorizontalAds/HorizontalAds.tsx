import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeUseContext } from "../../../theme/Theme";
import { AdProps, HorizontalAdsProps } from "./interfaces";

const HorizontalAds: React.FC<HorizontalAdsProps> = (props) => {
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
          props.content.map((ad: AdProps, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  height: 150,
                  width: Dimensions.get("screen").width * 0.9,
                  marginRight: 10,
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: theme.INSIDE_COMPONENT,
                }}
                onPress={() => alert(ad.text)}
              >
                <Text>{ad.text}</Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};
export default HorizontalAds;
