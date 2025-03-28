import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Aulas";
import Header from "./components/Header";
import UserProvider from "./providers/UserContext";
import Drawer from "./components/Drawer";
import { useState } from "react";
import Aulas from "./pages/Home";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

// Configuração do Bottom Tabs (as demais telas navegaveis)
function MainTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home">
                {() => (
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                )}
            </Tab.Screen>
            <Tab.Screen name="Aulas">
                {() => (
                    <DefaultLayout>
                        <Profile />
                    </DefaultLayout>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

// Configuração do Stack Navigator
//{/primeira tela login/}
//{/* //apos ela, todas as outras telas disponiveis */}
function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MainTabs" component={MainTabs} />
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Aulas" component={Aulas} />
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
