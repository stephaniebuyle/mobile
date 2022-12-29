import { useRoute } from "@react-navigation/native";
import { View} from "react-native";
import { Expo } from "../../types";
import DatePicker from "../datePicker/DatePicker";

const PlannerScreen = () => {

    const route = useRoute<any>();
    const expo: Expo = route.params?.expo;

    return (
        <View>
            <DatePicker expo={expo} />
        </View>
    )
}

export default PlannerScreen;