import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import DetailImage from "../detail/DetailImage";
import DetailDescription from "../detail/DetailDescription";
import DetailToFavorites from "../detail/DetailToFavorites";
import { CollectionDetailProps } from "../../types";

const DetailScreen = () => {

    const data = useRoute<any>();
    const objectNumber: string = data.params?.item.objectNumber;
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
              setCollectionDetailData(res)
          })
          .catch((e) => { console.log(e.message) })
    }, []);

    return (
        <ScrollView style={styles.container}>
            <DetailImage uri={data.params?.item.webImage.url} />
            <View style={styles.favoriteButton}>
              <DetailToFavorites data={data} />
            </View>
            <DetailDescription data={collectionDetailData?.artObject} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    favoriteButton: {
      marginLeft: 'auto'
    }
});

export default DetailScreen;