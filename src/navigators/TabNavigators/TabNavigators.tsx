import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import AccountsPage from "../../components/pages/AccountsPage/AccountsPage";
import MyCartPage from "../../components/pages/MyCartPage/MyCartPage";
import { ThemeUseContext } from "../../theme/Theme";
import AuthenticationStack from "../StackNavigators/AuthenticationStack/AuthenticationStack";

const TabNavigators = () => {
  const Tab = createBottomTabNavigator();
  const theme = ThemeUseContext();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.TABS,
            paddingBottom: 4,
          },
          tabBarIconStyle: {
            marginBottom: -4,
          },
          tabBarActiveTintColor: theme.ACTIVE_TABS,
          tabBarInactiveTintColor: theme.DEFAULT_TEXT_HEADER,
          tabBarIcon: ({ focused }) => {
            let tabs: any = {
              Ingressos: "ticket",
              Carrinho: "shopping-cart",
              Conta: "user",
            };
            return (
              <Icon
                name={tabs[route.name]}
                color={focused ? theme.ACTIVE_TABS : theme.DEFAULT_TEXT_HEADER}
                size={22}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Ingressos" component={AuthenticationStack} />
        <Tab.Screen name="Carrinho" component={MyCartPage} />
        <Tab.Screen name="Conta" component={AccountsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigators;
