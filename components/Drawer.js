import React, { useRef, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const DRAWER_WIDTH = width * 0.4;

export default function Drawer({ isOpen, onClose }) {
    const navigation = useNavigation();

    const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;

    useEffect(() => {
        if (isOpen) {
            // Abrir o drawer
            Animated.timing(translateX, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            // Fechar o drawer
            Animated.timing(translateX, {
                toValue: -DRAWER_WIDTH,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={onClose}
                />
            )}

            <Animated.View
                style={[styles.drawer, { transform: [{ translateX }] }]}
            >
                <View style={styles.header}>
                    <Text style={styles.headerText}>FIAP</Text>
                </View>

                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {
                            navigation.navigate("Home");
                            onClose();
                        }}
                    >
                        <AntDesign name="book" size={20} color="#BDBEBD" />
                        <Text style={styles.menuItemText}>Notas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {
							navigation.navigate("Aulas");
							onClose();
						}}
                    >
                        <AntDesign name="calendar" size={20} color="#BDBEBD" />
                        <Text style={styles.menuItemText}>Aulas</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.logoutButton} onPress={() => {
					navigation.navigate('Login');
					onClose();
				}}>
                    <AntDesign name="logout" size={20} color="#ED145B" />
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
            </Animated.View>
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
    },
    drawer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: DRAWER_WIDTH,
        height: "100%",
        backgroundColor: "#222222",
        zIndex: 2,
        flexDirection: "column",
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
    },
    headerText: {
        color: "#ED145B",
        fontSize: 24,
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        paddingTop: 20,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    menuItemText: {
        color: "#BDBEBD",
        fontSize: 16,
        marginLeft: 15,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#333333",
    },
    logoutText: {
        color: "#ED145B",
        fontSize: 16,
        marginLeft: 15,
    },
});
