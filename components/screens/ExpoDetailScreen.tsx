import { useNavigation } from "@react-navigation/native";

import { View, Text, Pressable } from "react-native";

const ExpoDetailScreen = ({expo}: {expo: any}) => {

    const navigation: any = useNavigation();

    return(
    <View>
        <View>
            <Text>{expo.title}</Text>
            <Pressable
                onPress={() => 
                    { navigation.navigate("Planner", {expo: expo})}
                }
                >
                <Text>Zet in agenda</Text>
            </Pressable>
        </View>
    </View>
    )
}

export default ExpoDetailScreen;