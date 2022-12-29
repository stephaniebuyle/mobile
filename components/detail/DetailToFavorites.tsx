import React, { useContext } from "react";
import { Pressable, StyleSheet } from "react-native"
import { DetailToFavoritesProps } from "../../types";
import { FavoritesContext } from "../Context";
import { MaterialIcons } from "@expo/vector-icons";

const DetailToFavorites = ({ data }: DetailToFavoritesProps) => {

    const { favorites, setFavorites, addFavorite, isFavorite, removeFavorite } = useContext(FavoritesContext);

    return (
        <Pressable
            style={styles.button}
            onPress={() => {
                if (!isFavorite(data.params.item.id)) {
                    addFavorite(data)
                }
                else {
                    removeFavorite(data.params.item.id)
                }
            }}
        >
            {isFavorite(data.params.item.id) ? <MaterialIcons name="favorite" size={24} color="purple" /> : <MaterialIcons name="favorite-border" size={24} color="purple" />}
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        marginRight: 10,
        padding: 10,
    },
});

export default DetailToFavorites;

