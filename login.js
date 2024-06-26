import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    alert('Inicio de sesión exitoso!');
  };

  return (
    <View style={styles.container}>
      <header>BIENVENIDO</header>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre de usuario</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry />
        <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.linkButton}>
          <Text style={styles.linkText}>¿No tienes una cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93FABD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
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
  linkButton: {
    marginTop: 20,
  },
  linkText: {
    color: '#F4D03F',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;