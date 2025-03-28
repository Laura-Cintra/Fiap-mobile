import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function ClassCard({ classData }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardTitleContainer}>
                <AntDesign name="caretright" size={14} color="#ED145B" />
                <Text style={styles.cardTitle}>{classData.dia}</Text>
            </View>
            <View style={styles.cardInfoContainer}>
                <Text style={[styles.textColor, styles.infoTitle]}>
                    {classData.aula1}
                </Text>
                <Text style={[styles.textColor, styles.infoSubtitle]}>
                    {classData.professor1}
                </Text>
                <Text style={[styles.textColor, styles.infoTime]}>
                    07:40 - 09:50
                </Text>
                <Text style={styles.cardLine} />
                <Text style={[styles.textColor, styles.infoTitle]}>
                    {classData.aula2}
                </Text>
                <Text style={[styles.textColor, styles.infoSubtitle]}>
                    {classData.professor2}
                </Text>
                <Text style={[styles.textColor, styles.infoTime]}>
                    07:40 - 09:50
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    cardTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "#303231",
        paddingLeft: 15,
        paddingVertical: 4,
        gap: 8,
    },
    cardContainer: {
        marginBottom: 22,
		flex: 1,
    },
    cardTitle: {
        color: "#BDBEBD",
        fontSize: 16,
        fontWeight: "bold",
    },
    cardLine: {
        borderTopWidth: 1,
        borderColor: "#BDBEBD42",
        marginTop: 15,
    },
    cardInfoContainer: {
        backgroundColor: "#484848",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingTop: 10,
        paddingBottom: 15,
    },
    textColor: {
        color: "#BDBEBD",
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
        marginHorizontal: 10,
    },
    infoSubtitle: {
        fontSize: 12,
        marginLeft: 10,
    },
    infoTime: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 4,
    },
});
