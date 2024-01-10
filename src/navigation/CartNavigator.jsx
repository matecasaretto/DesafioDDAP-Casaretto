import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import CartScreen from '../screens/CartScreen'
import { colors } from '../global/colors'


const Stack = createNativeStackNavigator()

const CartNavigator = () =>{
    return(
        <Stack.Navigator
        initialRouteName='Carrito'>
            <Stack.Screen
                name="Carrito"
                component={CartScreen}
                options={
                    {
                        headerStyle: {
                            backgroundColor: colors.quartary
                        }
                    }
                }/>
        </Stack.Navigator>
    )
}

export default CartNavigator