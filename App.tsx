import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeTab from './components/tabs/HomeTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import SearchTab from './components/tabs/SearchTab';
import FavoritesTab from './components/tabs/FavoritesTab';
import { FavoritesContext } from './components/Context';
import AgendaTab from './components/tabs/AgendaTab';

const Tab = createBottomTabNavigator();

export default function App() {

  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    const value: string | null = await AsyncStorage.getItem("favorites");
    if(value !== null){
      setFavorites(JSON.parse(value));
      console.log("uit async" + value)
    }
  };

  return (
    <FavoritesContext.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeTab} options={{
              headerShown: false,
              tabBarIcon: () => <FontAwesome name="home" size={24} color={"black"} />
          }} />
          <Tab.Screen name="Zoeken" component={SearchTab} options={{
              headerShown: false,
              tabBarIcon: () => <AntDesign name="search1" size={24} color="black" />
          }}/>
          <Tab.Screen name="Favorieten" component={FavoritesTab} options={{
              tabBarIcon: () => <AntDesign name="heart" size={24} color="black" />
          }}/>
          <Tab.Screen name="Agenda" component={AgendaTab} options={{
              headerShown: false,
              tabBarIcon: () => <AntDesign name="calendar" size={24} color="black" />
          }}/>  
        </Tab.Navigator>
    </NavigationContainer>
  </FavoritesContext.Provider>
  );
};

