import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { SearchProps, SelectionOption } from "../../types";
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import Constants from "expo-constants";

const SearchBar = (props: SearchProps) => {

    const [selectList, setSelectList] = useState<SelectionOption[]>([{ label: "all", parameter: "q" }, { label: "maker", parameter: "involvedMaker" }])

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={props.fieldValue}
                style={styles.picker}
                onValueChange={(itemValue) => props.callbackSetField(itemValue)}
            >
                <Picker.Item style={styles.pickerItem} label="All" value="q" />
                <Picker.Item style={styles.pickerItem} label="Artiest" value="involvedMaker" />

            </Picker>

            <TextInput style={styles.search} placeholder="Zoek..." value={props.searchValue} keyboardType="default" onChange={(event) => { props.callbackSetSearch(event.nativeEvent.text) }} onSubmitEditing={props.callbackRunSearch}></TextInput>
            <TouchableOpacity style={styles.button} onPress={() => {
                props.callbackRunSearch();
            }}>
                <FontAwesome style={styles.magnify} name="search" size={20} color="white" />
            </TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
    },
    picker: {
        height: 50,
        width: 100,
     
    },
    pickerItem: {
        fontSize: 15
    },
    button: {
        marginLeft: 8,
        height: '100%',
        color: 'white',
        backgroundColor: 'black',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderWidth: 4
    },
    magnify: {
        paddingTop: 11,
        paddingLeft: 15,
        paddingRight: 12,

    },
    search: {
        width: 180
    }
});
export default SearchBar; 
