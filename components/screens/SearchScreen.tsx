import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, Pressable, StyleSheet} from "react-native";
import { CollectionProps, PaginationProps } from "../../types";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../search/SearchBar";
import SearchResults from "../search/SearchResults";
import Pagination from "../search/Pagination";

const SearchScreen = () => {

    const [collectionData, setCollectionData] = useState<CollectionProps>();
    const [searchField, setSearchField] = useState<String>("q");
    const [searchValue, setSearchValue] = useState<String>("");
    const [page, setPage] = useState<Number>(1)

    const navigation: any = useNavigation();

    const fetchData = async () => {

        console.log("fetching data");
        let url = "https://www.rijksmuseum.nl/api/nl/collection?key=RcVFbOJg";
        url = url + "&" + searchField + "=" + searchValue + "&p=" + page;
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
                console.log("setting collection data");
            })
            .catch((e) => { console.log(e.message) })
    }

    useEffect(() => {
        console.log("ran useeffect");
        getData();
    }, [page]);

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
        <View style={styles.container}>
            
            <SearchBar callbackSetSearch={handleSetSearch} callbackSetField={handleSetField} callbackRunSearch={handleRunSearch} fieldValue={searchField} searchValue={searchValue} />
            <Text style={styles.text}>Resultaten: {collectionData?.count}</Text>
            <SearchResults navigation={navigation} collectionData={collectionData} />
            <Pagination callbackSetPage={setPage} count={collectionData?.count} page={page}/>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    text: {
        padding: 15
    },
  });
export default SearchScreen;