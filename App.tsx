import { Text, View } from "react-native";
import ContextsContainer from "./src/contexts";

export default function App() {
  return (
    <ContextsContainer>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>oi</Text>
      </View>
    </ContextsContainer>
  );
}
