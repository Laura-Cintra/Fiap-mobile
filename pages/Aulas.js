import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ClassCard from "../components/ClassCard";

export default function Aulas() {
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
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Aulas</Text>
                {classes.map((item, index) => (
                    <ClassCard key={`${item.dia}-${index}`} classData={item} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 30,
        paddingBottom: 100,
    },
    title: {
        color: "#FFF",
        fontSize: 24,
        marginBottom: 18,
    },
});
