import { RouteProp } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Pressable, Text } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ParamList } from "../../types";
import { FavoritesContext } from "../Context";

interface DetailToFavoritesProps {
    data: RouteProp<ParamList, 'Detail'>;
}

const DetailToFavorites = ({ data } : DetailToFavoritesProps ) => {

    const { favorites, setFavorites } = useContext(FavoritesContext);

    useEffect(()=>{
       saveFavorites(favorites); 
    }, [favorites])

    const saveFavorites = async (favorites: RouteProp<ParamList, "Detail">[] ) => {
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    }

    const addFavorite = async ( data : RouteProp<ParamList, 'Detail'>) => {
        setFavorites([...favorites, data]);
        alert("Toegevoegd aan favorieten");
    }

    return(
        <Pressable
            onPress={() => addFavorite(data)}
            style={{ backgroundColor: "lightblue", padding: 5, margin: 5}}
        >
            <Text>Voeg toe aan Favorieten</Text>
        </Pressable>
    )
}

export default DetailToFavorites;

