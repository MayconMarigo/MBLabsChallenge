import { View, Text, Dimensions } from "react-native";
import { AbsoluteViewWithRoundedCornerProps } from "./interfaces";
const AbsoluteViewWithRoundedCorner: React.FC<
  AbsoluteViewWithRoundedCornerProps
> = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#41337A",
        height: Dimensions.get("screen").height * 0.45,
        width: "100%",
        position: "absolute",
        justifyContent: "flex-end",
        bottom: props.inverse || false ? 0 : "52.42%",
      }}
    >
      <View
        style={{
          backgroundColor: "#41337A",
          width: "190%",
          height: 750,
          left: "-45%",
          borderRadius: 999,
          position: "absolute",
          bottom: props.inverse ? "-80%" : -115,
        }}
      />
    </View>
  );
};
export default AbsoluteViewWithRoundedCorner;
