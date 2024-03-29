import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import { colors } from '../global/colors'
import ProfileScreen from '../screens/ProfileScreen'
import ImageSelectorScreen from '../screens/ImageSelectorScreen'



const Stack = createNativeStackNavigator()

const ProfileNavigator = () =>{
    return(
        <Stack.Navigator
        initialRouteName="Perfil"
        screenOptions={
            ({navigation, route}) => ({
                header: () => <Header title={route.name} navigation={navigation} />
            })
        }  
    >
            <Stack.Screen
                name="Tu Perfil"
                component={ProfileScreen}
                options={
                    {
                        headerStyle: {
                            backgroundColor: colors.quartary
                        }
                    }
                }/>
                <Stack.Screen
                name="Seleccionar imagen"
                component={ImageSelectorScreen}
                />
        </Stack.Navigator>
    )
}

export default ProfileNavigator