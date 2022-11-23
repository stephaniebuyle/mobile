import * as React from "react"
import { View, FlatList, Image, Text } from "react-native"
import { CollectionProps } from "../../types";

const HomeScreen = () => {
    const [collectionData, setCollectionData] = React.useState<CollectionProps>();
    console.clear();
    console.log(collectionData);
  
    const fetchData = async () => {
      const response = await fetch("https://www.rijksmuseum.nl/api/nl/collection?key=RcVFbOJg")
      if (!response.ok) {
        throw new Error("Data could not be fetched");
      }
      else {
        return response.json();
      }
    }
  
    React.useEffect(() => {
      
      fetchData()
        .then((res) => {
          setCollectionData(res)
        })
        .catch((e) => { console.log(e.message) })
    }, []);

    return(
        <View style={{ flex: 1, padding: 24 }}>
        <FlatList
              data={collectionData?.artObjects}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (<View>
                <Image
                  style={{height:20,width:20}}
                  source={{ uri: item.webImage.url }}
                />
                <Text>{item.id + '. ' + item.title}</Text>
                </View>
              )}
            />
      </View>
    )
}

export default HomeScreen;