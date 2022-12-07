import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./screens/DetailScreen";
import HomeScreen from "./screens/HomeScreen";


const Stack = createNativeStackNavigator();

const HomeTab = () => {
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeTab;