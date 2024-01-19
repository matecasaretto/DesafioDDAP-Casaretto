import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator"
import { useSelector } from "react-redux";

const MainNavigator = () =>{
    const user = useSelector(state=>state.authReducer.user)
    return (
    <NavigationContainer>
        {user ? <TabNavigator /> : <AuthNavigator/>}
    </NavigationContainer>

    )
    
}

export default MainNavigator