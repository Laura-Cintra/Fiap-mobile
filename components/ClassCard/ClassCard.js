import { React } from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function ClassCard(props) {
    const classes = props.classes;
    return (
        <>
            {classes.map((c) => (
                <View style={styles.cardContainer}>
                    <View style={styles.cardTitleContainer}>
                        <AntDesign
                            name="caretright"
                            size={14}
                            color="#ED145B"
                        />
                        <Text style={styles.cardTitle}>{c.dia}</Text>
                    </View>
                    <View style={styles.cardInfoContainer}>
                        <Text style={[styles.textColor, styles.infoTitle]}>
                            {c.aula1}
                        </Text>
                        <Text style={[styles.textColor, styles.infoSubtitle]}>
                            {c.professor1}
                        </Text>
                        <Text style={[styles.textColor, styles.infoTime]}>
                            07:40 - 09:50
                        </Text>
                        <Text style={styles.cardLine} />
                        <Text style={[styles.textColor, styles.infoTitle]}>
                            {c.aula2}
                        </Text>
                        <Text style={[styles.textColor, styles.infoSubtitle]}>
                            {c.professor2}
                        </Text>
                        <Text style={[styles.textColor, styles.infoTime]}>
                            07:40 - 09:50
                        </Text>
                    </View>
                </View>
            ))}
        </>
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
	},
    cardTitle: {
        color: "#BDBEBD",
        fontSize: 16,
		fontWeight: 'bold',
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
        marginLeft: 10,
    },
    infoSubtitle: {
        fontSize: 12,
        marginLeft: 10,
    },
    infoTime: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 2,
    },
});
