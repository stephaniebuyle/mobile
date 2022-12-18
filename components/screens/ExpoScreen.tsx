import { View, Text } from "react-native";
import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";

const ExpoScreen = () => {
    const data: RouteProp<any> = useRoute();
    console.log("Test");
    console.log(data);

    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>{data.params?.item.title}</Text>
        </View>
    )
}

export default ExpoScreen;