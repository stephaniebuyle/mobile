import { Pressable, Image, View, Text, StyleSheet } from "react-native";
import { CardProps } from "../../types";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const SearchCard = (props: CardProps) => {
    return (
        <Pressable
            onPress={() => { props.navigation.navigate("Detail", { item: props.item }) }
            }
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: props.item.webImage?.url }}
                />
                <View style={styles.cardInfo}>
                    <Text style={styles.text}>{props.item.title + ' - ' + props.item.principalOrFirstMaker}</Text>
                    <MaterialIcons styles={styles.heart} name="favorite-border" size={15} color="black" />
                </View>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 10,
        minHeight: 80,
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 15,
        paddingRight: 15
    },
    cardInfo: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    text: {
        flex: 1,
        paddingRight: 20
    },
    heart: {
        flex: 1
    },
    image: {
        height: 50,
        width: 50,
        marginLeft: 10,
        marginRight: 10,
        resizeMode: 'contain',
        borderRadius: 10,
    }
});
export default SearchCard; 