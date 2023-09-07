import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Welcome, Signup } from "./screens";
import HomeScreen from "./screens/HomeScreen";
import WorkoutPage from "./screens/WorkoutPage";

const Stack = createNativeStackNavigator()
export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Welcome"
      >
        <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown:false
        }}
        />

<Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown:false
        }}
        />

<Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown:false
        }}
        />

<Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown:false
        }}
        />

<Stack.Screen
        name="WorkoutPage"
        component={WorkoutPage}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

