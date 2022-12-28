import { FlatList, StyleSheet } from "react-native"
import React, { useContext } from "react";
import { FavoritesContext } from "../Context";
import { useNavigation } from "@react-navigation/native";
import FavoriteCard from "../favorite/FavoriteCard";

const FavoritesScreen = () => {

    const { favorites, setFavorites } = useContext(FavoritesContext);
    const navigation: any = useNavigation();

    console.log(favorites.length)

    return (
        <FlatList
            style={styles.list}
            data={favorites}
            keyExtractor={({ key }, index) => key}
            renderItem={({ item }) => (
                <FavoriteCard key={item.params.item.id} detail={item} navigation={navigation} />
            )}
        />
    )
}
const styles = StyleSheet.create({
    list: {
        zIndex: -99 
    },
});
export default FavoritesScreen;