import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("./assets/fiap-logo.png")} />
            </View>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111312",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        justifyContent: "flex-start",
    },
});
