import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { colors } from "../global/colors";
import { Fontisto } from '@expo/vector-icons'; 
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons'; 

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrderdsNavigator from "./OrderdsNavigator";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false, 
                tabBarStyle:styles.TabNavigator,

            }}>
                <Tab.Screen 
                name="ShoppStack" 
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({focused})=> (
                        <Fontisto name="shopping-store" size={25} color={focused?'#808080':'black'} />
                    )
                }}
                />
                <Tab.Screen 
                name="CartStack" 
                component={CartNavigator}
                options={{
                    tabBarIcon: ({focused})=> (
                        <Foundation name="shopping-cart" size={35} color={focused?'#808080':"black"} />
                    )
                }}
                />
                <Tab.Screen 
                name="OrderStack" 
                component={OrderdsNavigator}
                options={{
                    tabBarIcon: ({focused})=> (
                        <MaterialCommunityIcons name="reorder-horizontal" size={30} color={focused?'#808080':"black"} />
                    )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    TabNavigator: {
        backgroundColor: colors.cuartary,
        position: "absolute",
        left: 25,
        right: 25,
        bottom: 25
    }
})