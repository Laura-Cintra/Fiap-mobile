import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#141819',
  },
  logo: {
    width: 80,
    height: 30,
  },
});