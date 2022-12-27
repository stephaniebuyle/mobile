import { Pressable, Image, View, Text } from "react-native";
import { CardProps } from "../../types";

const SearchCard = (props: CardProps) => {
    return (
        <Pressable
            onPress={() => { props.navigation.navigate("Detail", { item: props.item }) }
            }
        >
            <View>
                <Image
                    style={{ height: 20, width: 20 }}
                    source={{ uri: props.item.webImage.url }}
                />
                <Text>{props.item.id + '. ' + props.item.title}</Text>
            </View>
        </Pressable>
    )
}
export default SearchCard; 