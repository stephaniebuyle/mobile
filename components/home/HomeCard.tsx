import React from 'react'
import { Pressable, View, StyleSheet, Image, Text } from 'react-native';
import { CardProps } from "../../types";

const HomeCard = (props: CardProps) => {
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
        resizeMode: 'cover',
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
    }
});
export default HomeCard;