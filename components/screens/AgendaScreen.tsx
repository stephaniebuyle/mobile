import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, View, Image, Text, StyleSheet } from "react-native";
import { Expo } from "../../types";

const data: Expo[] = require('../../ExpoData.json');

const AgendaScreen = () => {
    
    const expos: Expo[] = data;
    const navigation: any = useNavigation();
    
    const expoDates: Expo[] = expos.map(e => ({
        startDate: new Date(e.startDate),
        endDate: new Date(e.endDate),
        title: e.title,
        description: e.description,
        subtitle: e.subtitle,
        image: e.image
    }))
    
    return(
        <View>
            <FlatList
                data={expos}
                keyExtractor={({ title }) => title}
                renderItem={({item}) => (
                    <Pressable
                        onPress={() => {
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
                                    <Text>{`${expoDates.find(expo => expo.title === item.title)?.startDate.toLocaleDateString('en-GB')}` + '  -  ' + `${expoDates.find(expo => expo.title === item.title)?.endDate.toLocaleDateString('en-GB')}`}</Text>
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
        backgroundColor: '#eae4ed',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        paddingRight: 15,
        shadowColor: '#171717',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
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