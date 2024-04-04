import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from "../screens/CameraScreen";
import LocalScreen from "../screens/LocalScreen";
import HomeScreen  from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator" // funciona como uma ID da tela, vamos usa-la para chamar esta tela depois
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

function TabNavigator() {
    return(
    <Tab.Navigator>
       <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                title: "Home",
                tabBarIcon: "home"
            }}
        />
        <Tab.Screen
            name="CameraScreen"
            component={CameraScreen}
            options={{
                title: "Câmera",
                tabBarIcon: "camera"
            }}
        />
         <Tab.Screen
            name="LocalScreen"
            component={LocalScreen}
            options={{
                title: "Localização",
                tabBarIcon: "information"
            }}
        />


    </Tab.Navigator>
    );
}