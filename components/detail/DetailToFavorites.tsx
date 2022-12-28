import React, { useContext, useEffect } from "react";
import { Pressable, Text } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Detail } from "../../types";
import { FavoritesContext } from "../Context";
import { AntDesign } from "@expo/vector-icons";

interface DetailToFavoritesProps {
    data: Detail;
}

const DetailToFavorites = ({ data } : DetailToFavoritesProps ) => {

    const { favorites, setFavorites, addFavorite } = useContext(FavoritesContext);

  
 

    return(
        <Pressable
            onPress={() => addFavorite(data)}
            style={{ backgroundColor: "lightblue", padding: 5, margin: 5}}
        >
            {favorites.find(favorite => favorite.params.item.id == data.params.item.id) ? <AntDesign name="heart" size={24} color="red" /> : <AntDesign name="heart" size={24} color="black" /> }
        </Pressable>
    )
}



export default DetailToFavorites;

