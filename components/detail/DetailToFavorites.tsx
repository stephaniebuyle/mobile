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

    const { favorites, setFavorites } = useContext(FavoritesContext);

    useEffect(()=>{
       saveFavorites(favorites); 
    }, [favorites])

    const saveFavorites = async (favorites: Detail[] ) => {
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    }

    const addFavorite = async ( data : Detail) => {
        if((favorites.findIndex(favorite => favorite.key == data.key)) <= -1){
            setFavorites([...favorites, data]);
        } else {
            const array = favorites.filter(favorite => favorite.key !== data.key);
            setFavorites(array);
        }
    }

    return(
        <Pressable
            onPress={() => addFavorite(data)}
        >
            {favorites.find(favorite => favorite.key == data.key) ? <AntDesign name="heart" size={24} color="red" /> : <AntDesign name="heart" size={24} color="grey" /> }
        </Pressable>
    )
}

export default DetailToFavorites;

