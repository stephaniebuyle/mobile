import { Pressable, Image, View, Text, StyleSheet } from "react-native";
import { FavoriteCardProps } from "../../types";
import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import { FavoritesContext } from "../Context";

const FavoriteCard = (props: FavoriteCardProps) => {

    const { favorites, removeFavorite } = useContext(FavoritesContext);

    return (
        <Pressable
            onPress={() => { props.navigation.navigate("Detail", { item: props.detail.params.item }) }
            }
        >
            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={{ uri: props.detail.params.item.webImage?.url }}
                />
                <View style={styles.cardInfo}>
                    <Text style={styles.text}>{props.detail.params.item.title + ' - ' + props.detail.params.item.principalOrFirstMaker}</Text>

                    <Pressable
                        onPress={() => { removeFavorite(props.detail.params.item.id) }
                        }
                    >
                        <AntDesign styles={styles.delete} name="delete" size={17} color="purple" />
                    </Pressable>
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
        minHeight: 90,
        backgroundColor: '#eae4ed',
        alignItems: 'center',
        marginTop: 15,
        paddingRight: 15,
        shadowColor: '#171717',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    cardInfo: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    text: {
        flex: 1,
        paddingRight: 20,
        fontSize: 15
    },
    delete: {
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
export default FavoriteCard; 