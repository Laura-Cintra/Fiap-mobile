
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
export default function Header({ onMenuPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress}>
        <Entypo  name="menu" size={24} color="#ED145B" />
      </TouchableOpacity>
      <Image 
        source={require('../assets/fiap-logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}


export default function Header() {
    return (
        <View style={styles.header}>
            <Ionicons name="menu" size={24} color="#ED145B" />
            <Image source={require("../../assets/fiap-logo.png")} />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: "#141819",
    },
});
