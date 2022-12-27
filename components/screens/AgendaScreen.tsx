import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import { Expo } from "../../types";

const data = require('../../ExpoData.json');

const AgendaScreen = () => {
    const expos: Expo[] = data;
    const navigation: any = useNavigation();

    return(
        <View style={styles.container}>
            <FlatList
                data={expos}
                renderItem={({item}) => (
                    <Pressable
                        onPress={() => {
                            console.log(item)
                            navigation.navigate("Expo", {item: item})}
                    }
                    >
                        <View style={styles.listItem}>
                            <Image
                                style={styles.listItemImage} 
                                source={
                                    {uri: item.image}
                                } 
                            />
                            <View style={styles.listItemText}>
                                <Text style={styles.listItemTitle}>{item.title}</Text>
                                <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    listItem: {
        display: "flex", 
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: "white"
    },
    listItemImage: {
        height: 100, 
        width: 100
    },
    listItemText: {
        paddingTop: 3,
        paddingLeft: 10,
        width: 275
    },
    listItemTitle: {
        textTransform: "uppercase"
    },
    listItemSubtitle: {
        fontStyle: "italic",
        color: "grey"
    }
});

export default AgendaScreen;