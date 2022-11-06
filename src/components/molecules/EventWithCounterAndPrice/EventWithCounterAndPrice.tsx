import { View, Text } from "react-native";
import { useState } from "react";
import { ThemeUseContext } from "../../../theme/Theme";
import { EventWithCounterAndPriceProps } from "./interface";
import CountersButton from "../../atoms/CountersButton/CountersButton";
const EventWithCounterAndPrice: React.FC<EventWithCounterAndPriceProps> = (
  props
) => {
  const theme = ThemeUseContext();
  const [counter, setCounter] = useState<number>(0);

  const handleCounters = (type: "minus" | "plus") => {
    if (type == "minus" && counter === 0) return;

    const types = {
      minus: counter - 1,
      plus: counter + 1,
    };

    return setCounter(types[type]);
  };

  return (
    <View
      style={{
        borderRadius: 8,
        padding: 15,
        backgroundColor: theme.INSIDE_COMPONENT,
        flexDirection: "row",
        marginVertical: 25,
      }}
    >
      <View style={{ width: "65%" }}>
        <Text style={{ fontWeight: "700" }}>EventWithCounterAndPriceiud</Text>
        <Text style={{ marginTop: 10 }}>R$ 49,99</Text>
      </View>

      <View
        style={{
          width: "35%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <CountersButton type="minus" onPress={() => handleCounters("minus")} />
        <Text style={{ marginHorizontal: 10, fontWeight: "700" }}>
          {counter}
        </Text>
        <CountersButton type="plus" onPress={() => handleCounters("plus")} />
      </View>
    </View>
  );
};
export default EventWithCounterAndPrice;
