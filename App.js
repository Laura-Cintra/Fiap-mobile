import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "./components/Header/Header";

export default function App() {
    return (
        <View style={styles.container}>
			<Header/>
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
});
