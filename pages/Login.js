import { View, Image, StyleSheet, Text } from "react-native";
import fiapLogo from "../assets/fiap-logo.png";
import imgLogin from "../assets/img-login.png";
import LoginForm from "../components/LoginForm";
import LoginForm from "../components/LoginForm";

export default function Login({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={fiapLogo} style={styles.logo} />
            </View>

            <View style={styles.imageContainer}>
                <Image source={imgLogin} style={styles.image} />
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>Por favor, faça login para continuar</Text>
                <LoginForm navigation={navigation}/>
                <LoginForm navigation={navigation}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111312",
        padding: 16,
    },
    logoContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    logo: {
        width: 100,
        height: 30,
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 250,
        height: 150,
    },
    formContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4
    },
    title: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#6E7B82",
        fontSize: 14,
        marginBottom: 12,
    }
});
