import { View, Text, FlatList } from "react-native"
import React, { useContext, useEffect } from "react";
import { FavoritesContext } from "../Context";
import { useNavigation } from "@react-navigation/native";

import { ArtObject } from "../../types";
import FavoriteCard from "../favorite/FavoriteCard";

const FavoritesTab = () => {

    const { favorites, setFavorites } = useContext(FavoritesContext);
    const navigation: any = useNavigation();

    console.log(favorites.length)
    
   
    
    return(
        <FlatList
                style={{ zIndex: -99 }}
                data={favorites}
                keyExtractor={({ key }, index) => key}
                renderItem={({ item }) => (
             <FavoriteCard key={item.params.item.id} detail={item} navigation={navigation} />)}
        />
    )
}

export default FavoritesTab;