import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { CollectionProps } from './types';

export default function App() {
  const [collectionData, setCollectionData] = useState<CollectionProps>();
  console.clear();
  console.log(collectionData);

  const fetchData = async () => {
    const response = await fetch("https://www.rijksmuseum.nl/api/nl/collection?key=RcVFbOJg&involvedMaker=Rembrandt+van+Rijn")
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
        setCollectionData(res)
      })
      .catch((e) => { console.log(e.message) })
  }, []);

  return (
    
    <View style={{ flex: 1, padding: 24 }}>

      {/*{collectionData?.artObjects.map((e,index) => { return <Text>{e.id} - {e.title}</Text>})} */}

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
  );
};

