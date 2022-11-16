import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './components/screens/HomeScreen';
import FavoritesScreen from './components/screens/FavoritesScreen';
import SearchScreen from './components/screens/SearchScreen';
import AgendaScreen from './components/screens/AgendaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Zoeken" component={SearchScreen} />
        <Tab.Screen name="Favorieten" component={FavoritesScreen} />
        <Tab.Screen name="Agenda" component={AgendaScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

