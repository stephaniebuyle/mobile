import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import Agenda from "../agenda/Agenda";

const PlannerScreen = () => {
    
    const data = useRoute<any>();
    
    return(
        <View>
            <Agenda />
        </View>
    )
}

export default PlannerScreen;