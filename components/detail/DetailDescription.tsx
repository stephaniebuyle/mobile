import React from 'react'
import { View, Text } from "react-native"
import { DetailDescriptionProps } from '../../types'

const DetailDescription = ({ data }: DetailDescriptionProps) => {

    return (
        <View>
            <Text>
                {data.params?.item.title}
            </Text>
            <Text>
                {data.params?.item.principalOrFirstMaker}
            </Text>
            <Text>
                {data.params?.item.productionPlaces}
            </Text>
        </View>
    )
}


export default DetailDescription;

