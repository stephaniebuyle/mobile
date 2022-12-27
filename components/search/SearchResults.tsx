import React from "react"
import { FlatList, Text } from "react-native"
import { SearchResultProps } from "../../types"
import SearchCard from "./SearchCard"

const SearchResults = (props: SearchResultProps) => {
    const displayResults = () => {
        if (props.collectionData?.count !== 0) {
            return (<FlatList
                data={props.collectionData?.artObjects}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <SearchCard item={item} navigation={props.navigation} />
                )}
            />)
        }
        else {
            return <Text>Geen resultaten</Text>
        }
    }
    return (
        displayResults()
    )
}
export default SearchResults; 
