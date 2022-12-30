import { View} from "react-native";
import { PlannerScreenProps } from "../../types";
import DatePicker from "../datePicker/DatePicker";


const PlannerScreen = ({expo}: PlannerScreenProps) => {

    return (
        <View>
            <DatePicker expo={expo} />
        </View>
    )
}

export default PlannerScreen;