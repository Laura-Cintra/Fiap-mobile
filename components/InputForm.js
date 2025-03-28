import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

export default function InputForm({ label, value, onChangeText, placeholder }) {

    return (
        <>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#5C6D77"
            value={value}
            onChangeText={onChangeText}
            keyboardType="numeric"
        />
        </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#6E7B82',
    fontSize: 14,
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    color: '#5C6D77',
    height: 45,
    paddingHorizontal: 10,
  },
});
