import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import React, { useEffect, useState } from "react";
import DetailImage from "../detail/DetailImage";
import DetailDescription from "../detail/DetailDescription";
import DetailToFavorites from "../detail/DetailToFavorites";
import { CollectionDetailProps } from "../../types";

const DetailScreen = () => {

    const data = useRoute<any>();
    const objectNumber: string = data.params?.item.objectNumber;
    console.log(objectNumber)
    const [collectionDetailData, setCollectionDetailData] = useState<CollectionDetailProps>();


    const fetchData = async () => {
        const response: Response = await fetch("https://www.rijksmuseum.nl/api/nl/collection/" + objectNumber + "?key=RcVFbOJg&p=");
        if (!response.ok) {
          throw new Error("Data could not be fetched");
        }
        else { 
          return response.json();
        }
    }

    useEffect(() => {
        fetchData()
          .then((res) => {
            console.log(res)
            setCollectionDetailData(res)
            console.log(collectionDetailData);
          })
          .catch((e) => { console.log(e.message) })
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <DetailImage uri={data.params?.item.webImage.url} />
            <DetailDescription data={data} />
            <DetailToFavorites data={data} />
        </View>
    )
}

export default DetailScreen;