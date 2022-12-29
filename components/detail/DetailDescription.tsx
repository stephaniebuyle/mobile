import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import { DetailDescriptionProps } from '../../types'


const DetailDescription = ({ data } : DetailDescriptionProps) => {

    let dimensions: string = '';
    if(!(data?.dimensions == undefined)){
        dimensions = data?.dimensions.map(element => `${element.type} ${element.value}${element.unit}`).join(' x ');
    }

    let colors: string[] = [];
    if(!(data?.colors == undefined)){
        colors = data?.colors.map(element => element.hex.trimStart())
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                {data?.title}, {data?.principalMaker}, {data?.dating.presentingDate}
            </Text>
            <Text style={styles.textMaterials}>
                {data?.materials}, {dimensions}
            </Text>
            <Text style={styles.description}>
                {data?.description}
            </Text>
            <Text style={styles.colorsText}>
                {colors.length === 0 ? <Text></Text> : <Text>gebruikte kleuren</Text>}
            </Text>
            <View style={styles.colors}>
                {colors.map(color => <View key={color} style={{height:25, width: 25, backgroundColor: color}}/>)}
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    textTitle: {
        fontSize: 18,
        paddingBottom: 10
    },
    textMaterials: {
        color: 'gray',
        paddingBottom: 5
    },
    dimensions: {
        color: 'gray',
        paddingBottom: 5
    },
    description: {
        paddingBottom: 5
    },
    colorsText: {
        color: 'gray',
        paddingBottom: 5 
    },
    colors: {
        marginRight: 'auto',
        flexDirection: 'row',
    }
})


export default DetailDescription;

