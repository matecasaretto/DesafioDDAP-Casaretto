import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderScreen from '../screens/OrderScreen'
import { colors } from '../global/colors'

const Stack = createNativeStackNavigator()

const OrderdsNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Órdenes"
    screenOptions={
        ({ navigation, route }) => ({
            header: () => <Header title={route.name} navigation={navigation}/>,                     
        })
    }
>
        <Stack.Screen
                name="Ordenes"
                component={OrderScreen}
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

export default OrderdsNavigator