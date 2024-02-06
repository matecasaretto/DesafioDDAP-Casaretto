import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from '../components/input';
import { colors } from '../global/colors';
import { useEffect, useState } from 'react';
import { useLogInMutation } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { insertSession } from '../db';


const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [triggerLogIn, result] = useLogInMutation()

  const onSubmit = () =>{
    triggerLogIn({email, password})
    console.log(result)
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    if(result.data){
        dispatch(setUser(result.data))
        insertSession({
          localId: result.data.localId,
          email: result.data.email,
          token: result.data.idToken
      })
      .then(result=>console.log("Éxito al guardar sesión: ", result))
      .catch(error=>console.log("Error al guardar sesión: ", error.message))
    }

}, [result])


  return (
    <View style={styles.container}>
      <Input label="Email:"
      onChange={setEmail} />
      <Input label="Contraseña:"
      onChange={setPassword}
      isSecureEntry={true} />

      <TouchableOpacity style={styles.registerButton} onPress={onSubmit}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
          <Text style={styles.loginLink}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: colors.quinary,
  },
  registerButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: colors.quinary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  loginLink: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
});
