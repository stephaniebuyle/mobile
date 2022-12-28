import React, { useContext } from "react";
import { Pressable, StyleSheet } from "react-native"
import { DetailToFavoritesProps } from "../../types";
import { FavoritesContext } from "../Context";
import { AntDesign } from "@expo/vector-icons";

const DetailToFavorites = ({ data }: DetailToFavoritesProps) => {

    const { favorites, setFavorites, addFavorite, isFavorite, removeFavorite } = useContext(FavoritesContext);

    return (
        <Pressable
            onPress={() => {
                if (!isFavorite(data.params.item.id)) {
                    addFavorite(data)
                }
                else {
                    removeFavorite(data.params.item.id)
                }
            }
            }
            style={styles.button}
        >
            {isFavorite(data.params.item.id) ? <AntDesign name="heart" size={24} color="purple" /> : <AntDesign name="heart" size={24} color="black" />}
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "lightgrey",
        padding: 5,
        margin: 5
    },
});

export default DetailToFavorites;

