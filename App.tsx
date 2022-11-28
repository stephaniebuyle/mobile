import { NavigationContainer, RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import HomeScreen from './components/screens/HomeScreen';
import FavoritesScreen from './components/screens/FavoritesScreen';
import AgendaScreen from './components/screens/AgendaScreen';
import SearchTab from './components/SearchTab';
import { ParamList } from './types';

const Tab = createBottomTabNavigator();

export default function App() {

  const [favorites, setFavorites] = useState<RouteProp<ParamList, "Detail">[]>([]);

  return (
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
  );
};

