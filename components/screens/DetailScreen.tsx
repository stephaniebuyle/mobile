import { useRoute } from "@react-navigation/native";
import { Share, View, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator,  TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import DetailImage from "../detail/DetailImage";
import DetailDescription from "../detail/DetailDescription";
import DetailToFavorites from "../detail/DetailToFavorites";
import { CollectionDetailProps } from "../../types";
import { AntDesign } from "@expo/vector-icons";

const DetailScreen = () => {

    const data = useRoute<any>();
    const objectNumber: string = data.params?.item.objectNumber;
    const [collectionDetailData, setCollectionDetailData] = useState<CollectionDetailProps>();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const response: Response = await fetch("https://www.rijksmuseum.nl/api/nl/collection/" + objectNumber + "?key=RcVFbOJg&p=");
        if (!response.ok) {
            throw new Error("Data could not be fetched");
        }
        else {
            return response.json();
        }
    }

    const getData = () => {
        setLoading(true);
        fetchData()
            .then((res) => {

                setCollectionDetailData(res);
                setLoading(false);

                console.log("setting collection data");
            })
            .catch((e) => { console.log(e.message) })
    }

    useEffect(() => {
        console.log("ran useeffect");
        getData();
    }, []);

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Bekijk dit kunstobject: ' + data.params?.item.webImage?.url,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert("error");
        }
      };

    

    return (
        <ScrollView style={styles.container}>
            <View>
                <DetailImage uri={data.params?.item.webImage?.url} />
                <SafeAreaView>
                    {loading ? <ActivityIndicator size="large" color="purple" /> :
                        <View>
                            <View style={styles.buttons}>
                                <DetailToFavorites data={data} />
                            
                            <TouchableOpacity onPress={onShare} >
                                <AntDesign styles={styles.share} name="sharealt" size={20} color="purple" />
                            </TouchableOpacity>
                            </View>
                            <DetailDescription data={collectionDetailData?.artObject} />
                        </View>}
                </SafeAreaView>
            </View>

        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttons: {
        marginLeft: 'auto',
        flexDirection :'row',
        alignItems: 'center',
        paddingRight: 15
    }, 
    share : {

    }
});
export default DetailScreen;