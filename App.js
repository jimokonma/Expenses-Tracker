import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// Screens
import HomeScreen from "./screens/HomeScreen";
import TransactionScreen from "./screens/TransactionScreen";
import { Colors } from "./components/ui/Colors";
import { Text } from "react-native";
import AddButton from "./components/ui/AddButton";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.primaryBlue800,
  },
};

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: Colors.primaryBlue500,
          },
          // set icons
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "hourglass-sharp" : "hourglass-sharp";
            } else if (route.name === "History") {
              iconName = focused ? "calendar" : "calendar-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: Colors.primaryBlue500,
          },
          headerTintColor: "#fff",
          tabBarActiveTintColor: Colors.primaryYellow500,
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Recente Expenses",
            headerRight: () => <AddButton />,
          }}
        />
        <Tab.Screen name="History" component={TransactionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
