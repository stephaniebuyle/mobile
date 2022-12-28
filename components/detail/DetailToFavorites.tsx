import React, { useContext, useEffect } from "react";
import { Pressable, Text } from "react-native"
import { Detail } from "../../types";
import { FavoritesContext } from "../Context";
import { AntDesign } from "@expo/vector-icons";

interface DetailToFavoritesProps {
    data: Detail;
}

const DetailToFavorites = ({ data } : DetailToFavoritesProps ) => {

    const { favorites, setFavorites, addFavorite, isFavorite, removeFavorite } = useContext(FavoritesContext);

    return(
        <Pressable
            onPress={() => {
                if(!isFavorite(data.params.item.id)){
                    addFavorite(data)
                }
                else{
                    removeFavorite(data.params.item.id)
                }
                }
            }
            style={{ backgroundColor: "lightblue", padding: 5, margin: 5}}
        >
            {isFavorite(data.params.item.id) ? <AntDesign name="heart" size={24} color="purple" /> : <AntDesign name="heart" size={24} color="black" /> }
        </Pressable>
    )
}



export default DetailToFavorites;

