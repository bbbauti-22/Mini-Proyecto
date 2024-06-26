import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const InputComponent = () => {
  const [text, setText] = useState('');
  const [Password, setPassword] = useState('');
  return (
    <View style={styles.inputContainer}>
      <View style={styles.Formulario}>
        <TextInput
          style={styles.input}
          placeholder=""
          value={text}
          onChangeText={setText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    marginTop: '10px',

  },
  Formulario:{
 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    width: 500, 
    backgroundColor: 'white',
  },

});

export default InputComponent;