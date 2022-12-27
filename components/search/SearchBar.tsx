import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { SearchProps, SelectionOption } from "../../types";

const SearchBar = (props : SearchProps) => {

    const [selectList, setSelectList] = useState<SelectionOption[]>([{ label: "all", parameter: "q" }, { label: "maker", parameter: "involvedMaker" }])

    return (
        <View>
            <SelectDropdown
                data={selectList}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    props.callbackSetField(selectedItem.parameter);
                }}
                defaultButtonText={'Select'}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.label;
                }}
                rowTextForSelection={(item, index) => {
                    return item.label;
                }}
            />
            <TextInput placeholder="Search..." keyboardType="default" onChange={(event) => { props.callbackSetSearch(event.nativeEvent.text) }}></TextInput>
            
            <Button
                title="Search"
                onPress={() => {
                    props.callbackRunSearch();
                }}
            />
        </View>
    )
}
export default SearchBar; 
