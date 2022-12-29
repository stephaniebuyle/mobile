import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import AgendaScreen from "../screens/AgendaScreen"
import ExpoScreen from "../screens/ExpoScreen"

const Stack = createNativeStackNavigator();

const AgendaTab = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Exposities in het Rijksmuseum" component={AgendaScreen} />
                <Stack.Screen name="Expo" component={ExpoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AgendaTab;