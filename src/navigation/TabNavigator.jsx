
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { colors } from "../global/colors";
import { Fontisto } from '@expo/vector-icons'; 
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrderdsNavigator from "./OrderdsNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return(
        
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

                <Tab.Screen 
                name="ProfileStack" 
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({focused})=> (
                        <FontAwesome name="user-o" size={24} color={focused?'#808080':"black"} />
                    )
                }}
                />
            </Tab.Navigator>
        
        
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    TabNavigator: {
        backgroundColor: colors.quartary,
        position: "absolute",
        left: 25,
        right: 25,
        bottom: 25
    }
})