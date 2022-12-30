import React from "react";
import { useRoute, RouteProp, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpoDetailScreen from "./ExpoDetailScreen";
import PlannerScreen from "./PlannerScreen";
import { Expo } from "../../types";

const Stack = createNativeStackNavigator();

const ExpoScreen = () => {

    const route: RouteProp<any> = useRoute();
    const expo: Expo = route.params?.item;

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Expo" options={{ headerShown: false }}>
                    {props => <ExpoDetailScreen {...props} expo={expo} />}
                </Stack.Screen>
                <Stack.Screen name="Planner" options={{ headerShown: false }} >
                    {props => <PlannerScreen {...props} expo={expo} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ExpoScreen;