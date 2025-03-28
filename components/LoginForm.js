import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useUser } from '../providers/UserContext';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function LoginForm({ navigation }) {
    const users = [
        { name: 'Maria', email: 'maria@fiap.com', password: 'RM558832' },
        { name: 'Vinicius', email: 'vinicius@fiap.com', password: 'RM' },
        { name: 'Laura', email: 'laura@fiap.com', password: 'RM558843' },
    ];

    const { setUser } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleLogin = () => {
        console.log('Login button pressed');
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            Alert.alert('Login bem-sucedido', `Bem-vindo, ${user.name}!`);
            setUser(user.name);
            navigation.replace('MainTabs');
        } else {
            Alert.alert('Erro', 'Email ou senha incorretos!');
        }
    };

    return (
        <View>
            <View style={styles.inputContainer}>
                <AntDesign name="user" size={20} color="white" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#798593"
                    onChangeText={setName}
                    value={name}
                />
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name="email" size={24} color="white" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#798593"
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <View style={styles.inputContainer}>
                <EvilIcons name="lock" size={24} color="white" style={styles.icon} />
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
        marginBottom: 20
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
    button: {
        width: '87px',
        height: '22px',
        backgroundColor: '#ED145B',
        color: '#fff'
    },
    buttonContainer: {
        width: 150,
        borderRadius: 8,
        overflow: "hidden",
        alignSelf: "center",
        marginTop: 20,
    },
});
