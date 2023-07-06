import Home from "./Screens/Home";
import { Provider } from "react-redux";
import storee from "./Redux/Store/Store";
import RestourantDetails from "./Screens/RestourantDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrderCompleted from "./Screens/OrderCompleted";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={storee}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={RestourantDetails} />
          <Stack.Screen name="Order" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
