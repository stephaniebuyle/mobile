import * as React from "react"
import { StyleSheet, View, FlatList, Image, Text, Pressable } from "react-native"
import { CollectionProps } from "../../types";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

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
      })
      .catch((e) => { console.log(e.message) })
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>Hollands Glorie</Text>
      <FlatList
        data={collectionData?.artObjects}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (

          <Pressable
            onPress={() => {
              navigation.navigate("Detail", { item: item })
            }
            }
          >
            <View style={styles.card}>

              <Image style={styles.img}

                source={{ uri: item.webImage?.url }}
              />
              <Text style={styles.legend}>{item.title}</Text>
            </View>
          </Pressable>
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
  card: {
    width: 300,
    position: "relative", 
    marginBottom: 5
  },
  img: {
    height: 350,
    width: '100%',
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: "gray",
  },
  legend: {
    position: "absolute",
    bottom: 5,
    left: 5,
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#ffffff",
    padding: 2,
  },
  titleApp: {
    fontWeight: "bold",
    fontSize: 33,
    textAlign: "center"
  }
});

export default HomeScreen;