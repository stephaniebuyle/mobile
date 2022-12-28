import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Detail } from "../types";

interface IFavoritesContext {
    favorites: Detail[],
    setFavorites: (favorites: Detail[]) => void
  }

export const FavoritesContext = React.createContext<IFavoritesContext>({favorites: [], setFavorites: (favorites: Detail[]) => {}});
