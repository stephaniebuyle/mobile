import { useRoute } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import React from "react";
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
        <View style={styles.container}>
            <DetailImage uri={data.params?.item.webImage.url} />
            <DetailDescription data={data} />
            <DetailToFavorites data={data} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },
});
export default DetailScreen;