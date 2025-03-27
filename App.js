import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="menu" size={24} color="#ED145B" />
                <Image source={require("./assets/fiap-logo.png")} />
            </View>
            <View>
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111312",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom: 10,
		backgroundColor: "#141819",
    },
});
