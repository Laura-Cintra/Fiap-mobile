import { React } from "react";
import { StyleSheet, Text, View } from "react-native";
import ClassCard from "../components/ClassCard/ClassCard";

export default function SchedulePage() {
    const classes = [
        {
            dia: "Segunda",
            aula1: "Mobile Application Development",
            professor1: "Paulo Moreira Marinho",
            aula2: "Java Advanced",
            professor2: "João Carlos Lima",
        },
        {
            dia: "Segunda",
            aula1: "Mobile Application Development",
            professor1: "Paulo Moreira Marinho",
            aula2: "Java Advanced",
            professor2: "João Carlos Lima",
        },
        {
            dia: "Segunda",
            aula1: "Mobile Application Development",
            professor1: "Paulo Moreira Marinho",
            aula2: "Java Advanced",
            professor2: "João Carlos Lima",
        },
        {
            dia: "Segunda",
            aula1: "Mobile Application Development",
            professor1: "Paulo Moreira Marinho",
            aula2: "Java Advanced",
            professor2: "João Carlos Lima",
        },
        {
            dia: "Segunda",
            aula1: "Mobile Application Development",
            professor1: "Paulo Moreira Marinho",
            aula2: "Java Advanced",
            professor2: "João Carlos Lima",
        },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aulas</Text>
            <ClassCard classes={classes} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 30,
    },
    title: {
        color: "#FFF",
        fontSize: 24,
        marginBottom: 18,
    },
    
});
