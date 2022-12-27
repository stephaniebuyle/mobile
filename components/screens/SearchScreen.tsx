import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, Pressable } from "react-native";
import { CollectionProps } from "../../types";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../search/SearchBar";
import SearchResults from "../search/SearchResults";

const SearchScreen = () => {

    const [collectionData, setCollectionData] = useState<CollectionProps>();
    const [searchField, setSearchField] = useState<String>("q");
    const [searchValue, setSearchValue] = useState<String>("");

    const navigation: any = useNavigation();

    const fetchData = async () => {

        console.log("fetching data");
        let url = "https://www.rijksmuseum.nl/api/nl/collection?key=RcVFbOJg";
        url = url + "&" + searchField + "=" + searchValue;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Data could not be fetched");
        }
        else {
            return response.json();
        }
    }

    const getData = () => {
        fetchData()
            .then((res) => {
                setCollectionData(res)
            })
            .catch((e) => { console.log(e.message) })
        console.log(collectionData);
    }

    useEffect(() => {
        getData();
    }, []);

   

    const handleSetSearch = (value: string) => {
        setSearchValue(value);
    }

    const handleSetField = (value: string) => {
        setSearchField(value);
    }

    const handleRunSearch = () => {
        getData();
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <SearchBar callbackSetSearch={handleSetSearch} callbackSetField={handleSetField} callbackRunSearch={handleRunSearch} fieldValue={searchField} searchValue={searchValue} />
            <SearchResults navigation={navigation} collectionData={collectionData} />

        </View>

    )
}
export default SearchScreen;