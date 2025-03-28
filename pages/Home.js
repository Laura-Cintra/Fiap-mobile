import { View, Text } from "react-native";
import { useUser } from "../providers/UserContext";

export default function Aulas(){
    const { user } = useUser();
    return(
        <View>
            <Text>
                CONFIRA AS NOTAS, {user}
            </Text>
        </View>
    )
}