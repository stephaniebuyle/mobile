import React from "react";
import { useRoute, RouteProp, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpoDetailScreen from "./ExpoDetailScreen";
import PlannerScreen from "./PlannerScreen";

const Stack = createNativeStackNavigator();

const ExpoScreen = () => {

    const route: RouteProp<any> = useRoute();
    console.log(route.params?.item)

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Expo" options={{ headerShown: false }}>
                    {props => <ExpoDetailScreen {...props} expo={route.params?.item} />}
                </Stack.Screen>
                <Stack.Screen name="Planner" component={PlannerScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ExpoScreen;