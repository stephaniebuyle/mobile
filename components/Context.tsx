import { RouteProp } from "@react-navigation/native";
import React from "react";
import { ParamList } from "../types";

interface IFavoritesContext {
    favorites: RouteProp<ParamList, 'Detail'>[],
    setFavorites: (favorites: RouteProp<ParamList, 'Detail'>[]) => void
  }

export const FavoritesContext = React.createContext<IFavoritesContext>({favorites: [], setFavorites: (favorites: RouteProp<ParamList, 'Detail'>[]) => {}});
