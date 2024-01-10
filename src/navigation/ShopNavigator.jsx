import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../global/colors'

//Vistas
import CategoriesScreen from '../screens/CategoriesScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return(
    
         <Stack.Navigator>
            <Stack.Screen
                name="Categorias"
                component={CategoriesScreen}
                options={
                    {
                        headerStyle: {
                            backgroundColor: colors.cuartary
                        }
                    }
                }/>
            <Stack.Screen
                name="Producto"
                component={ProductsByCategoryScreen}
                options={
                    {
                        headerStyle: {
                            backgroundColor: colors.cuartary
                        }   
                    }
                }/>
            <Stack.Screen
                name="Detalle del producto"
                component={ProductDetailScreen}
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

export default ShopNavigator

