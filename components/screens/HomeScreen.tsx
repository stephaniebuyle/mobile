import * as React from "react"
import { StyleSheet, View, FlatList, Text } from "react-native"
import { CollectionProps } from "../../types";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import HomeCard from "../home/HomeCard";

const HomeScreen = () => {
  const [collectionData, setCollectionData] = React.useState<CollectionProps>();

  const page = Math.floor(Math.random() * 200) + 1;

  const fetchData = async () => {
    const response = await fetch("https://www.rijksmuseum.nl/api/nl/collection?key=RcVFbOJg&p=" + page)
    if (!response.ok) {
      throw new Error("Data could not be fetched");
    }
    else {
      return response.json();
    }
  }

  const navigation: any = useNavigation();

  React.useEffect(() => {
    fetchData()
      .then((res) => {
        setCollectionData(res)
        console.log(collectionData)
      })
      .catch((e) => { console.log(e.message) })
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>Hollandse Glorie</Text>
      <FlatList
        data={collectionData?.artObjects}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <HomeCard item={item} navigation={navigation} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },
  titleApp: {
    fontWeight: "bold",
    fontSize: 33,
    textAlign: "center"
  }
});

export default HomeScreen;