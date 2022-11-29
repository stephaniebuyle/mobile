import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import HomeScreen from './components/screens/HomeScreen';
import FavoritesScreen from './components/screens/FavoritesScreen';
import AgendaScreen from './components/screens/AgendaScreen';
import SearchTab from './components/SearchTab';

const Tab = createBottomTabNavigator();

interface IFavoritesContext {
  favorites: string[],
  setFavorites: (favorites: string[]) => void
}

export default function App() {

  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <FavoritesContext.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: () => <FontAwesome name="home" size={24} color={"black"} />
        }} />
        <Tab.Screen name="Zoeken" component={SearchTab} options={{
            headerShown: false,
            tabBarIcon: () => <AntDesign name="search1" size={24} color="black" />
        }}/>
        <Tab.Screen name="Favorieten" component={FavoritesScreen} options={{
            tabBarIcon: () => <AntDesign name="heart" size={24} color="black" />
        }}/>
        <Tab.Screen name="Agenda" component={AgendaScreen} options={{
            tabBarIcon: () => <AntDesign name="calendar" size={24} color="black" />
        }}/>  
      </Tab.Navigator>
    </NavigationContainer>
    </FavoritesContext.Provider>
  );
};

export const FavoritesContext = React.createContext<IFavoritesContext>({favorites: [], setFavorites: (favorites: string[]) => {}});
