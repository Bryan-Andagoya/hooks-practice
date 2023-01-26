import { NavigationContainer } from "@react-navigation/native";

import { UserProvider } from "./src/context";
import { BottomTabNavigator } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <BottomTabNavigator />
      </UserProvider>
    </NavigationContainer>
  );
}
