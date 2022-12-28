import React from "react"
import { FlatList, Text, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native"
import { SearchResultProps } from "../../types"
import SearchCard from "./SearchCard"

const SearchResults = (props: SearchResultProps) => {
    
    const displayResults = () => {

        // console.log(`result: ${JSON.stringify(props.collectionData)}`);

        if (props.collectionData?.count !== 0) {
            return (<FlatList
                style={{ zIndex: -99 }}
                data={props.collectionData?.artObjects}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <SearchCard item={item} navigation={props.navigation} />
                )}
            />)
        }
        else {
            return <Text style={styles.text}>Geen resultaten</Text>
        }
    }

    return (
        displayResults()

    )
}
const styles = StyleSheet.create({
    text: {
        marginTop: 60,
        textAlign: 'center',
        fontSize: 20,
        zIndex: -99
    },
});
export default SearchResults; 
