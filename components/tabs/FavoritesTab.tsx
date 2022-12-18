import { View, Text } from "react-native"
import React, { useContext } from "react";
import { FavoritesContext } from "../Context";

const FavoritesTab = () => {

    const { favorites, setFavorites } = useContext(FavoritesContext);
    
    
    return(
        <View>
            {favorites.map((id) => <Text key={id.params.item.id}>{id.params.item.title}</Text>)}
        </View>
    )
}

export default FavoritesTab;