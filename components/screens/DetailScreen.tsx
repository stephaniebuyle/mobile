import { useRoute } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import React from "react";
import DetailImage from "../detail/DetailImage";
import DetailDescription from "../detail/DetailDescription";
import DetailToFavorites from "../detail/DetailToFavorites";

const DetailScreen = () => {

    const data = useRoute<any>();
    // console.log('data format')
    // console.log(data);

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