import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header/Header";
import SchedulePage from "./screens/SchedulePage";

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <StatusBar style="auto" />
				<SchedulePage/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111312",
    },
});
