import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./pages/Login";  
import Home from "./pages/Home";
import Profile from "./pages/Aulas";
import Header from "./components/Header/Header";
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './components/Header';
import Drawer from './components/Drawer';
import SchedulePage from './screens/SchedulePage'; // Sua página de aulas

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Componente de Layout para telas com Header fixo
function DefaultLayout({ children }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
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
{/*//primeira tela login*/}
 {/* //apos ela, todas as outras telas disponiveis */}
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#111312" />
        <Header onMenuPress={toggleDrawer} />
        <MainStack />
        <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111312",
  },
});

