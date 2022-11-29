import { View, Text } from "react-native"
import React, { useContext } from "react";
import { FavoritesContext } from "../../App";

const FavoritesScreen = () => {

    const { favorites, setFavorites } = useContext(FavoritesContext);
    
    return(
        <View>
            {favorites.map((id) => <Text key={id}>{id}</Text>)}
        </View>
    )
}

export default FavoritesScreen;