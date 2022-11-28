import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./screens/DetailScreen";
import SearchScreen from "./screens/SearchScreen";

const Stack = createNativeStackNavigator();

const SearchTab = () => {
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator /*screenOptions={{ headerShown: false }}*/>
                <Stack.Screen name="Zoeken" component={SearchScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SearchTab;