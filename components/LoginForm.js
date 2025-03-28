import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Text,
    TouchableOpacity,
} from "react-native";
import { useUser } from "../providers/UserContext";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function LoginForm({ navigation }) {
    const users = [
        { name: "Maria", email: "maria@fiap.com", password: "RM558832" },
        { name: "Vinicius", email: "vinicius@fiap.com", password: "RM554456" },
        { name: "Laura", email: "laura@fiap.com", password: "RM558843" },
    ];

    const { setUser } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    // Estado do Modal
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleLogin = () => {
        console.log("Login button pressed");
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            setModalMessage(`Bem-vindo, ${user.name}!`);
            setIsSuccess(true);
            setUser(user.name);
            setModalVisible(true);

            setTimeout(() => {
                setModalVisible(false);
                navigation.replace("Home");
            }, 2000);
        } else {
            setModalMessage("Email ou senha incorretos!");
            setIsSuccess(false);
            setModalVisible(true);
        }
    };

    return (
        <View>
            <View style={styles.inputContainer}>
                <AntDesign
                    name="user"
                    size={20}
                    color="white"
                    style={styles.icon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#798593"
                    onChangeText={setName}
                    value={name}
                />
            </View>
            <View style={styles.inputContainer}>
                <Fontisto
                    name="email"
                    size={24}
                    color="white"
                    style={styles.icon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#798593"
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <View style={styles.inputContainer}>
                <EvilIcons
                    name="lock"
                    size={24}
                    color="white"
                    style={styles.icon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#798593"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Login" color="#ED145B" onPress={handleLogin} />
            </View>

            {/* Modal de Feedback do login*/}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View
                        style={[
                            styles.modalContent,
                            isSuccess ? styles.successModal : styles.errorModal,
                        ]}
                    >
                        <Text style={styles.modalText}>{modalMessage}</Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1A1C1E",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: "100%",
        marginBottom: 20,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        color: "#FFF",
        fontSize: 16,
        borderWidth: 0,
    },
    buttonContainer: {
        width: 150,
        borderRadius: 8,
        overflow: "hidden",
        alignSelf: "center",
        marginTop: 20,
    },

    // Estilos do Modal
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: 300,
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    successModal: {
        backgroundColor: "#2ecc71",
    },
    errorModal: {
        backgroundColor: "#e74c3c",
    },
    modalText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    modalButton: {
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    modalButtonText: {
        color: "#333",
        fontSize: 14,
        fontWeight: "bold",
    },
});
