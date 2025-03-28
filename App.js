import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './components/Header';
import Drawer from './components/Drawer';
import SchedulePage from './screens/SchedulePage'; // Sua página de aulas

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#111312" />
      <Header onMenuPress={toggleDrawer} />
      <SchedulePage />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111312',
  },
});