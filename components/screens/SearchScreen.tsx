import React from "react";
import { FlatList, Text, View, Image, TextInput, Button, Pressable, Alert } from "react-native";
import { CollectionProps, SelectionOption } from "../../types";
import SelectDropdown from 'react-native-select-dropdown';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const SearchScreen = () => {

    const [collectionData, setCollectionData] = React.useState<CollectionProps>();
    const [searchField, setSearchField] = React.useState<String>("q");
    const [searchValue, setSearchValue] = React.useState<String>("");
    const [selectList, setSelectList] = React.useState<SelectionOption[]>([{ label: "all", parameter: "q" }, { label: "maker", parameter: "involvedMaker" }])

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

    React.useEffect(() => {
        getData();
       
    }, []);

    const displayResults = () => {
        if (collectionData?.count !== 0) {

            return (<FlatList
                data={collectionData?.artObjects}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {
                            Alert.alert("Pressed!")
                        }}
                    >
                        <View>
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={{ uri: item.webImage.url }}
                            />
                            <Text>{item.id + '. ' + item.title}</Text>
                        </View>
                    </Pressable>
                )}
            />)
        }
        else {
            return <Text>No results</Text>
        }
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <TextInput placeholder="Search..." keyboardType="default" onChange={(event) => {setSearchValue(event.nativeEvent.text)}}></TextInput>
            <SelectDropdown
                data={selectList}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    setSearchField(selectedItem.parameter);
                }}
                defaultButtonText={'Select'}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.label;
                }}
                rowTextForSelection={(item, index) => {
                    return item.label;
                }}
            />
             <Button
                title="Search"
                onPress={() => {
                  getData();
                }}
            />
            {displayResults()}

        </View>
    )
}

export default SearchScreen;