import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from '../components/input';
import { colors } from '../global/colors';
import { useEffect, useState } from 'react';
import { useSignUpMutation } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';


const SignupScreen = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [triggerSignup, result] = useSignUpMutation()

  const onSubmit = () =>{
    triggerSignup({email, password, setConfirmPassword})
  }
  const dispatch = useDispatch()

  useEffect (()=>{
    if(result.data){
      dispatch(setUser(result.data))
    }
  }, [result])

  return (
    <View style={styles.container}>
      <Input label="Email:" onChange={setEmail}/>
      <Input label="Contraseña:" onChange={setPassword} isSecureEntry={true}/>
      <Input label="Repetir contraseña:" onChange={setConfirmPassword} isSecureEntry={true}/>

      <TouchableOpacity style={styles.registerButton} onPress={onSubmit}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity onPress={() =>  {navigation.navigate('Login')} }>
          <Text style={styles.loginLink}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

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
