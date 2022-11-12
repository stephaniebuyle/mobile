import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

interface Response {
  artObject: {
    description: string
  }
}

export default function App() {

const [data, setData] = useState<Response>();

useEffect(() => {
  getData();
}, []);

const getData = async () => {
    
    let response = await fetch('https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=RcVFbOJg', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    let json = await response.json();
    setData(json as Response);
}

  return (
    <View style={styles.container}>
      <Text>{data?.artObject.description} </Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
