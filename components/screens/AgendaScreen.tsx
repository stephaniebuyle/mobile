import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, View, Image, Text } from "react-native";
import { Expo } from "../../types";

const data = require('../../ExpoData.json');

const AgendaScreen = () => {
    const expos: Expo[] = data;
    const navigation: any = useNavigation();

    return(
        <View>
            <FlatList
                data={expos}
                renderItem={({item}) => (
                    <Pressable
                        onPress={() => {
                            navigation.navigate("Expo", {item: item})}
                    }
                    >
                        <View style={{display: "flex", flexDirection: "row"}}>
                            <Image
                                style={{height: 100, width: 100}} 
                                source={
                                    {uri: item.image}
                                } 
                            />
                            <Text>{item.title}</Text>
                        </View>
                    </Pressable>
                )}
            >
            </FlatList>
        </View>
    )
}

export default AgendaScreen;