import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";

const ExpoDetailScreen = ({expo}: {expo: any}) => {

    const navigation = useNavigation();

    return(
        <View>
            <Text>{expo.params?.item.title}</Text>
            <Pressable
                onPress={() => 
                    { navigation.navigate("Planner", { expo: expo })}
                }
            >
                <Text>Zet in agenda</Text>
            </Pressable>
         </View>
    )
}

export default ExpoDetailScreen;