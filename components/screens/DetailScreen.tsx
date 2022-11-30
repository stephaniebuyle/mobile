import { RouteProp, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import React from "react";
import DetailImage from "../detail/DetailImage";
import DetailDescription from "../detail/DetailDescription";
import DetailToFavorites from "../detail/DetailToFavorites";
import { ItemProps, ParamList } from "../../types";

const DetailScreen = () => {

    const data = useRoute<RouteProp<ParamList, 'Detail'>>();
    
   
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <DetailImage uri={data.params?.item.webImage.url}/>
            <DetailDescription data={data} />
            <DetailToFavorites id={data.params.item.id} />
        </View>
    )
}

export default DetailScreen;