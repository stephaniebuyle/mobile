import React from "react";
import { useRoute, RouteProp, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpoDetailScreen from "./ExpoDetailScreen";
import PlannerScreen from "./PlannerScreen";

const Stack = createNativeStackNavigator();

const ExpoScreen = () => {
    const data: RouteProp<any> = useRoute();

    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Expo">
                    {props => <ExpoDetailScreen {...props} expo={data} />}
                </Stack.Screen>
                <Stack.Screen name="Planner" component={PlannerScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ExpoScreen;