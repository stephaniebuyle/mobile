import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import { Expo } from "../../types";

const data = require('../../ExpoData.json');

const AgendaScreen = () => {
    // new Date(data)
    const expos: Expo[] = data;
    const navigation: any = useNavigation();
    
    return(
        <View>
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
                                <View style={styles.listItemDates}>
                                    <Text>{item.startDate.toString().slice(0, 10)}</Text>
                                    <Text> - </Text>
                                    <Text>{item.endDate.toString().slice(0, 10)}</Text>
                                </View>
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
    listItem: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 10,
        minHeight: 90,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        paddingRight: 15
    },
    listItemImage: {
        height: 50,
        width: 50,
        marginLeft: 10,
        marginRight: 10,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    listItemText: {
        justifyContent: 'space-between',
        width: 275,
        padding: 10
    },
    listItemTitle: {
        textTransform: "uppercase",
        paddingRight: 20
    },
    listItemSubtitle: {
        flex: 1,
        fontStyle: "italic",
        color: "grey",
        paddingRight: 20
    },
    listItemDates: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default AgendaScreen;