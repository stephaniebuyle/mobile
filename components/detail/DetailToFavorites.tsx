import { useContext } from "react";
import { Pressable, Text } from "react-native"
import { FavoritesContext } from "../../App"

interface DetailToFavoritesProps {
    id: string
}

const DetailToFavorites = ({ id } : DetailToFavoritesProps ) => {

    const { favorites, setFavorites } = useContext(FavoritesContext);

    const addFavorite = (id: string) => {
        setFavorites([...favorites, id]);
        alert("Toegevoegd aan favorieten");
    }

    return(
        <Pressable
            onPress={() => addFavorite(id)}
            style={{ backgroundColor: "lightblue", padding: 5, margin: 5}}
        >
            <Text>Voeg toe aan Favorieten</Text>
        </Pressable>
    )
}

export default DetailToFavorites;

