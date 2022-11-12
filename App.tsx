import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CollectionProps } from './types';
import axios, { AxiosResponse } from 'axios';



export default function App() {

  // axios api call 
  /* 
  const [collectionData, setCollectionData] = useState<CollectionProps[]>([]);
  console.clear();
  console.log('Collection data: ', collectionData);
  const key: string = "RcVFbOJg"

  useEffect(() => {
    axios
      .get<CollectionProps[]>(`https://www.rijksmuseum.nl/api/nl/collection?key=RcVFbOJg&involvedMaker=Rembrandt+van+Rijn`)
      .then((response: AxiosResponse) => {
        setCollectionData(response.data);
      });
  }, []);
  */

  // via fetch 

  /* const [isLoading, setLoading] = useState(true);
  const [collectionData, setCollectionData] = useState<CollectionProps[]>([]);
  console.log(collectionData);


  useEffect(() => {
    fetch('https://www.rijksmuseum.nl/api/nl/collection?key=RcVFbOJg&involvedMaker=Rembrandt+van+Rijn')
      .then((response) => response.json())
      .then((json) : CollectionProps => setCollectionData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  */

  const [collectionData, setCollectionData] = useState<CollectionProps>();
  //console.clear();
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
      {collectionData?.artObjects.map((e,index) => { return <Text>{e.id} - {e.title}</Text>})}
     
    </View>
  );
};




