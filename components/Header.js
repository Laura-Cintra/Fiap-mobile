import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { triggerReset } from '../GlobalReset';

export default function Header({ onMenuPress, onLogoPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress}>
        <Entypo  name="menu" size={24} color="#ED145B" />
      </TouchableOpacity>
      <TouchableOpacity onPress={triggerReset}>
		<Image
		  source={require('../assets/fiap-logo.png')}
		  style={styles.logo}
		  resizeMode="contain"
		/>
	  </TouchableOpacity>
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