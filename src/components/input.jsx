import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { colors } from '../global/colors';

const Input = ({label, isSecureEntry = false, value, error = "", onChange }) => {

    const [input, setInput] = useState()

    const onHndlerChangeText = (text) =>{
        setInput(text)
        onChange(text)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onHndlerChangeText}
        secureTextEntry={isSecureEntry}
        value={value}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: colors.secondary,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});
