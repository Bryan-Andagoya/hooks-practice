import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { EffectScreen, StateScreen, ContextScreen } from "../screens";

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "State") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Effect") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "Context") {
            iconName = focused ? "apps" : "apps-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "deepskyblue",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",
      })}
    >
      <BottomTab.Screen name="State" component={StateScreen} />
      <BottomTab.Screen name="Effect" component={EffectScreen} />
      <BottomTab.Screen name="Context" component={ContextScreen} />
    </BottomTab.Navigator>
  );
};
