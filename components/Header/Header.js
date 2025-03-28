import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Ionicons name="menu" size={24} color="#ED145B" />
            <Image source={require("../../assets/fiap-logo.png")} />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: "#141819",
    },
});
