import { Pressable, Image, View, Text, StyleSheet } from "react-native";
import { CardProps, Detail } from "../../types";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { FavoritesContext } from "../Context";

const SearchCard = (props: CardProps) => {

    const { favorites, setFavorites, addFavorite, isFavorite, removeFavorite } = useContext(FavoritesContext);

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
                    <Pressable
                        onPress={() => {
                            if (!isFavorite(props.item.id)) {
                                let rand = new Date().getTime().toString();
                                let detailObject: Detail = { key: rand, params: { item: props.item } }
                                addFavorite(detailObject)
                            }
                            else {
                                removeFavorite(props.item.id)
                            }
                        }
                        }

                    >
                        {isFavorite(props.item.id) ? <MaterialIcons styles={styles.heart} name="favorite" size={18} color="purple" /> : <MaterialIcons styles={styles.heart} name="favorite-border" size={18} color="purple" />}

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
        minHeight: 80,
        backgroundColor: '#eae4ed',
        alignItems: 'center',
        marginBottom: 15,
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