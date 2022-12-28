import { View, StyleSheet, Pressable, Text } from "react-native";
import * as React from 'react'
import { PaginationProps } from "../../types";
import { Entypo } from "@expo/vector-icons";

const Pagination = (props: PaginationProps) => {

    const displayPrev = () => {
        if (props.page > 1) {
            return (
            <Pressable
                style={styles.pagination}
                onPress={(event) => props.callbackSetPage(props.page - 1)}>
                <Entypo name="arrow-with-circle-left" size={30} color="purple" />
            </Pressable>)
        }
    }

    const displayNext = () => {
        if ((props.page * 10) < 10000 && (props.page * 10 < props.count)) {
            return (
                <Pressable
                    onPress={(event) => props.callbackSetPage(props.page + 1)}>
                    <Entypo name="arrow-with-circle-right" size={30} color="purple" />
                </Pressable>)
        }
    }

    return (
        <View style={styles.container}>
            {displayPrev()}
            {displayNext()}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    pagination: {
        
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
    },
});
export default Pagination; 