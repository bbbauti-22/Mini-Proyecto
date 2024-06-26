import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} >
      <Text style={styles.buttonText}>Registrar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F4D03F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ButtonComponent;