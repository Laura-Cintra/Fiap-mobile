import { default as React } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import ClassCard from "../components/ClassCard";

export default function Aulas() {
    const classes = [
        {
            dia: "Segunda",
            aula1: "DevOps Tools & Cloude Computing",
            professor1: "Rafael Santos Pereira",
            aula2: "Advanced Business Development with .NET",
            professor2: "Thiago Keller Torquato Vicco",
        },
        {
            dia: "Terça",
            aula1: "DevOps Tools & Cloud Computing",
            professor1: "Rafael Santos Pereira",
            aula2: "Mastering Relational And Non-Relational DataBase",
            professor2: "Vergílio Valério Dos Santos",
        },
        {
            dia: "Quarta",
            aula1: "Disruptive Architectures: IOT, IOB & Generative AI",
            professor1: "Adnré Tritiack de Farias",
            aula2: "Compliance, Quality Assurance & Tests",
            professor2: "Paulo Sergio Sampaio",
        },
        {
            dia: "Quinta",
            aula1: "Mobile Application Development",
            professor1: "Paulo Moreira Marinho",
            aula2: "Java Advanced",
            professor2: "João Carlos Lima",
        },
        {
            dia: "Sexta",
            aula1: "Mobile Application Development",
            professor1: "Paulo Moreira Marinho",
            aula2: "Java Advanced",
            professor2: "João Carlos Lima",
        },
    ];

    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
        >
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
    scrollView: {
        flex: 1,
        backgroundColor: "#111312",
    },
    contentContainer: {
        flexGrow: 1,
        ...Platform.select({
            web: {
                minHeight: "100vh",
            },
        }),
    },
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 30,
        paddingBottom: 100,
        ...Platform.select({
            web: {
                minHeight: "100vh",
            },
        }),
    },
    title: {
        color: "#FFF",
        fontSize: 24,
        marginBottom: 18,
    },
});
