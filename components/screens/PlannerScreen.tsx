import { View} from "react-native";
import { Expo, PlannerScreenProps } from "../../types";
import DatePicker from "../datePicker/DatePicker";


const PlannerScreen = ({expo}: {expo: Expo}) => {

    return (
        <View>
            <DatePicker expo={expo} />
        </View>
    )
}

export default PlannerScreen;