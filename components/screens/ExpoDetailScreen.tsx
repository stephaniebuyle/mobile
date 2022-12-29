import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { ExpoDetailScreenProps } from "../../types";


const ExpoDetailScreen = ({ expo }: ExpoDetailScreenProps) => {

    const navigation: any = useNavigation();

    return(
    <View>
        <View style={styles.container}>
            <Image 
                source={{ uri: expo.image }}
                style={styles.expoImage}
            />
            <Text style={styles.expoTitle}>{expo.title}</Text>
            <Text style={styles.expoDescription}>{expo.description}</Text>
            <View style={styles.expoWhen}>
                <Text style={styles.expoWhenText}>Wanneer te zien</Text>
                <View style={styles.expoDates}>
                    <Text>{expo.startDate.toLocaleDateString('nl-NL')}</Text>
                    <Text>   -   </Text>
                    <Text>{expo.endDate.toLocaleDateString('nl-NL')}</Text>
                </View>
            </View>
            <View style={styles.addToAgendaContainer}>
            <Pressable
                style={styles.addToAgenda}
                onPress={() => 
                    { navigation.navigate("Planner", {expo: expo})}
                }
            >
                <Text style={styles.addToAgendaText}>Zet in agenda</Text>
            </Pressable>
            </View>
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    expoImage: {
        resizeMode: 'cover',
        width: 400,
        height: 350
    },
    expoTitle: {
        marginLeft: 10,
        marginTop: 10,
        textTransform: 'uppercase',
        fontSize: 20
    },
    expoDescription: {
        marginLeft: 10,
        marginTop: 10,
        paddingBottom: 10
    },
    expoWhen: {
        marginLeft: 10,
        marginTop: 20,
        textTransform: 'uppercase',
    },
    expoWhenText: {
        textTransform: 'uppercase',
        fontStyle: "italic",
    },
    expoDates: {
        marginTop: 10,
        flexDirection: 'row',
    },
    addToAgendaContainer: {
        alignItems: 'center',
    },
    addToAgenda: {
        marginTop: 20,
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 10,
        alignContent: 'center',
    },
    addToAgendaText: {
        color: 'white'
    }
})

export default ExpoDetailScreen;