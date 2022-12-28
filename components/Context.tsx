import React, { useEffect } from "react";
import { AsyncStorage } from "react-native";
import { Detail } from "../types";

interface IFavoritesContext {
  favorites: Detail[],
  setFavorites: (favorites: Detail[]) => void,
  addFavorite: (favorite: Detail) => void,
  removeFavorite: (id: string) => void,
  isFavorite: (id: string) => boolean

}

// export const FavoritesContext = React.createContext<IFavoritesContext>({favorites: [], setFavorites: (favorites: Detail[]) => {}});

export const FavoritesContext = React.createContext<IFavoritesContext>(
  {
    favorites: [],
    setFavorites: (favorites: Detail[]) => { },
    addFavorite: (favorite: Detail) => { },
    removeFavorite: (id: string) => { },
    isFavorite: (id: string) => { return false }
  }
);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = React.useState<Detail[]>([]);

  useEffect(() => {

    getFavorites();

  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites])

  const getFavorites = async () => {
    const value: string | null = await AsyncStorage.getItem("favorites");
    if (value !== null) {
      setFavorites(JSON.parse(value));
      console.log("uit async" + value)
    }
  };

  const isFavorite = (id: string): boolean => {
    return favorites.some(f => f.params.item.id === id);
  }

  const saveFavorites = async (favorites: Detail[]) => {
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  }

  const addFavorite = (favorite: Detail) => {
    console.log("adding fav")
    if (!isFavorite(favorite.params.item.id)) {
      setFavorites([...favorites, favorite]);
    }
  }
  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(f => f.params.item.id !== id));
  }

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

