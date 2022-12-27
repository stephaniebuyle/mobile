import React from 'react'
import { Pressable, View, StyleSheet, Image, Text } from 'react-native';
import { ArtObject } from "../../types";

interface HomeCardProps {
    item: ArtObject;
    navigation: any;
}

const HomeCard = (props: HomeCardProps) => {
    return (
        <Pressable
            onPress={() => {
                props.navigation.navigate("Detail", { item: props.item })
            }
            }
        >
            <View style={styles.card}>

                <Image style={styles.img}
                    source={{ uri: props.item.webImage?.url }}
                />
                <Text style={styles.legend}>{props.item.title}</Text>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    card: {
        width: 300,
        position: "relative",
        marginBottom: 5
    },
    img: {
        height: 350,
        width: '100%',
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: "gray",
    },
    legend: {
        position: "absolute",
        bottom: 5,
        left: 5,
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "#ffffff",
        padding: 2,
    },
    titleApp: {
        fontWeight: "bold",
        fontSize: 33,
        textAlign: "center"
    }
});
export default HomeCard;