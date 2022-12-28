import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable } from "react-native";

const ExpoDetailScreen = ({ expo }: { expo: any }) => {

    const navigation: any = useNavigation();
    console.log(expo);
    const Stack = createNativeStackNavigator();

    return (
        <View>
            <View>
                <Text>{expo.title}</Text>

                <Pressable
                    onPress={() => { navigation.navigate("Planner", { expo: expo }) }
                    }
                >
                    <Text>Zet in agenda</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ExpoDetailScreen;