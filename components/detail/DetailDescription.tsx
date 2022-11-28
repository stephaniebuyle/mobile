import { View, Text } from "react-native"

const DetailDescription = ( { data } : any) => {
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

