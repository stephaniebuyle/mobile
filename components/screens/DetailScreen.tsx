import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import React from "react";
import DetailImage from "../detail/DetailImage";
import DetailDescription from "../detail/DetailDescription";
import DetailToFavorites from "../detail/DetailToFavorites";

const DetailScreen = () => {
    
    const data = useRoute<any>();

    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <DetailImage uri={data.params?.item.webImage.url}/>
            <DetailDescription data={data} />
            <DetailToFavorites data={data} />
        </View>
    )
}

export default DetailScreen;