import React from 'react'
import { RouteProp } from "@react-navigation/native"
import { useContext } from "react"
import { View, Text } from "react-native"
import { ParamList } from "../../types"

interface DetailDescriptionProps {
    data: RouteProp<ParamList, 'Detail'>
}

const DetailDescription = ({ data } : DetailDescriptionProps) => {

    return(
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

