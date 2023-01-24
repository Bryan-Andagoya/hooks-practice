import { NavigationContainer } from "@react-navigation/native";

import { BottomTabNavigator } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
