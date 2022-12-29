import { FlatList, Pressable, StyleSheet, View, Text } from "react-native"
import React, { useContext, useState } from "react";
import { FavoritesContext } from "../Context";
import { useNavigation } from "@react-navigation/native";
import FavoriteCard from "../favorite/FavoriteCard";
import { Entypo } from "@expo/vector-icons";

const FavoritesScreen = () => {

    const { favorites, setFavorites } = useContext(FavoritesContext);
    const navigation: any = useNavigation();

    const [page, setPage] = useState(0);
    const limit = 5;
    const offset = page * limit;

    // console.log(favorites.length)

    const displayPrev = () => {
        if (page > 0) {
            return (
                <Pressable
                    style={styles.pagination}
                    onPress={(event) => setPage((previous) => previous - 1)}>
                    <Entypo name="arrow-with-circle-left" size={30} color="purple" />
                </Pressable>)
        }
    }

    const displayNext = () => {
        if (offset < favorites.length - limit) {
            return (
                <Pressable
                    style={styles.pagination}
                    onPress={(event) => setPage((previous) => previous + 1)}>
                    <Entypo name="arrow-with-circle-right" size={30} color="purple" />
                </Pressable>)
        }
    }

    return (
        <View>
            <Text style={styles.text}>Aantal favorieten: {favorites.length}</Text>
            <FlatList
                style={styles.list}
                data={favorites.slice(offset, offset + limit)}
                keyExtractor={({ key }, index) => key}
                renderItem={({ item }) => (
                    <FavoriteCard key={item.params.item.id} detail={item} navigation={navigation} />
                )}
            />
            <View style={styles.container}>
            {displayPrev()}
            {displayNext()}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    list: {
        zIndex: -99
    },
    container: {
        marginTop: 25,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    text: {
        padding: 15,
        fontSize: 15,
        fontWeight: 'bold'
    },
    pagination: {

        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
    },
});
export default FavoritesScreen;