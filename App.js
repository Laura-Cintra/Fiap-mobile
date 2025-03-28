import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Aulas from "./pages/Aulas";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProvider from "./providers/UserContext";
const Stack = createStackNavigator();


// Componente de Layout para telas com Header fixo
function DefaultLayout({ children }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <View style={{ flex: 1 }}>
            <Header onMenuPress={toggleDrawer}/>
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}/>
            {children}
        </View>
    );
}


// Configuração do Stack Navigator
//{/primeira tela login/}
//{/* //apos ela, todas as outras telas disponiveis */}
function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Home">
                {() => (
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                )}
            </Stack.Screen>
			<Stack.Screen name="Aulas">
                {() => (
                    <DefaultLayout>
                        <Aulas />
                    </DefaultLayout>
                )}
            </Stack.Screen>
            {/* <Stack.Screen name="MainTabs" component={MainTabs} /> */}
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <UserProvider>
            <NavigationContainer>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <MainStack />
                </View>
            </NavigationContainer>
        </UserProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111312",
    },
});
