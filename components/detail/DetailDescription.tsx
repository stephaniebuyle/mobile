import { RouteProp } from "@react-navigation/native"
import { View, Text } from "react-native"

interface DetailDescriptionProps {
    data: RouteProp<any>;
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

