import { RouteProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Pressable, Text } from "react-native"
import { ItemProps, ParamList } from "../../types";

// lukt niet om dit met een type te doen
const DetailToFavorites = ( data: any ) => {
    
    //werkt niet, steeds gereset wanneer pagina wordt geladen, moet een globale useState worden (dan is deze ook door te geven aan favo pagina) maar heb geen idee hoe ik die hook kan doorgeven met tab navigatie
    const [favorites, setFavorites] = useState<RouteProp<ParamList, "Detail">[]>([]);

    const addFavorite = (data: RouteProp<ParamList, "Detail">) => {
        setFavorites([...favorites, data]);
        console.log(favorites);
    }

    return(
        <Pressable
            onPress={() => addFavorite(data)}
            style={{ backgroundColor: "lightblue", padding: 5 }}
        >
            <Text>Voeg toe aan Favorieten</Text>
        </Pressable>
    )
}

export default DetailToFavorites;

