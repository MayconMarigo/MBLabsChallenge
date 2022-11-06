import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ImageProps, ImageBackground } from "react-native";
import BackCircledButton from "../../atoms/BackCircledButton/BackCircledButton";
import { EventImageViewProps } from "./interfaces";

const EventImageView: React.FC<EventImageViewProps> = (props) => {
  return (
    <View style={{ height: 280 }}>
      <ImageBackground
        source={{
          uri: props.ImageURI,
        }}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <View style={{ position: "absolute", left: 15, top: 35 }}>
          <BackCircledButton />
        </View>
        <LinearGradient
          colors={["rgba(222,222,222,0.0)", "#fff"]}
          style={{
            height: 75,
            width: "100%",
            position: "absolute",
            bottom: 0,
          }}
        />
      </ImageBackground>
    </View>
  );
};
export default EventImageView;
