import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ButtonComponent from './boton';
import InputComponent from './input';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    username: '',
    password: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegisterPress = () => {
    const { nombre, apellido, dni, username, password } = formData;
    if (nombre && apellido && dni && username && password) {
      alert('Registro exitoso!');
      navigation.navigate('Login');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.nombre}>Ingrese nombre</Text>
        <InputComponent
          value={formData.nombre}
          onChangeText={(value) => handleInputChange('nombre', value)}
          placeholder="Nombre"
        />
        <Text style={styles.nombre}>Ingrese apellido</Text>
        <InputComponent
          value={formData.apellido}
          onChangeText={(value) => handleInputChange('apellido', value)}
          placeholder="Apellido"
        />
        <Text style={styles.nombre}>Ingrese DNI</Text>
        <InputComponent
          value={formData.dni}
          onChangeText={(value) => handleInputChange('dni', value)}
          placeholder="DNI"
        />
        <Text style={styles.nombre}>Ingrese Nombre de usuario</Text>
        <InputComponent
          value={formData.username}
          onChangeText={(value) => handleInputChange('username', value)}
          placeholder="Nombre de usuario"
        />
        <Text style={styles.nombre}>Ingrese Contraseña</Text>
        <InputComponent
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          placeholder="Contraseña"
          secureTextEntry
        />
        <ButtonComponent onPress={handleRegisterPress} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.linkButton}>
          <Text style={styles.linkText}>¿Ya tienes una cuenta? Inicia sesión</Text>
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
  nombre: {
    marginBottom: 10,
    fontSize: 16,
  },
  linkButton: {
    marginTop: 20,
  },
  linkText: {
    color: '#FF6F61',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;