import { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { SearchProps } from "../../types";
import { FontAwesome } from '@expo/vector-icons';
import { Button, Divider, Menu, Provider } from 'react-native-paper';

const SearchBar = (props: SearchProps) => {

    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    var arr = new Map([
        ['q', 'Alles'],
        ['involvedMaker', 'Artiest'],
        ['type', 'Type'],
        ['technique', 'Techniek'],
        ['material', 'Materiaal'],
    ]);

    const handleChangeSelect = (value: string) => {
        props.callbackSetField(value);
        closeMenu();
    }

    return (
        <View>
            <View style={styles.container}>
                <Provider>
                    <View>
                        <Menu style={styles.menu}
                            visible={visible}
                            onDismiss={closeMenu}
                            
                            anchor={<Button style={styles.anchor}onPress={openMenu}>{arr.get(props.fieldValue)}</Button>}>
                            <Text style={styles.menuItems}>Kies zoekveld:</Text>
                            
                            <Menu.Item onPress={() => { handleChangeSelect("q") }} title="Alles" />

                            <Menu.Item onPress={() => { handleChangeSelect("involvedMaker") }} title="Artiest" />

                            <Menu.Item onPress={() => { handleChangeSelect("type") }} title="Type" />
                            <Menu.Item onPress={() => { handleChangeSelect("technique") }} title="Techniek" />
                            <Menu.Item onPress={() => { handleChangeSelect("material") }} title="Materiaal" />

                        </Menu>
                    </View>
                </Provider>

                <TextInput style={styles.search} placeholder="Zoek..." value={props.searchValue} keyboardType="default" onChange={(event) => { props.callbackSetSearch(event.nativeEvent.text) }} onSubmitEditing={props.callbackRunSearch}></TextInput>

                <TouchableOpacity style={styles.button} onPress={() => {
                    props.callbackRunSearch();
                }}>
                    <FontAwesome style={styles.magnify} name="search" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 0,
    },
    menuItems: {
        borderBottomWidth: 1, 
        paddingBottom: 9,
        borderBottomColor: 'gray',
        textAlign: "center", 
        fontSize: 15,
        fontWeight: 'bold'
    },
    menu: { 
        margin:0,
        padding:0
       
    },
    anchor:
    {
        borderRadius: 1,
       
    }, 
    picker: {
        height: 50,
        width: 50,
        flex: 3
    },
    pickerItem: {
        fontSize: 15,
    },
    button: {
        marginLeft: 8,
        height: '100%',
        color: 'white',
        backgroundColor: 'black',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderWidth: 4,
        flex: 1
    },
    magnify: {
        paddingTop: 5,
        paddingLeft: 17,

    },
    search: {
        width: 180,
        flex: 4,
        paddingLeft: 15
    }
});

export default SearchBar;