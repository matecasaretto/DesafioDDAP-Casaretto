import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSession } from "../db";
import { setProfilePicture, setUser } from "../features/authSlice";
import { useDispatch } from "react-redux";

const MainNavigator = () =>{
    const user = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)
    const dispatch = useDispatch()



    useEffect(()=>{
        (async ()=>{
            try{
                const session = await fetchSession()
                console.log("Session:", session)
                if(session?.rows.length){
                    console.log("Se han encontrado datos de usuario")
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            }catch(error){
                console.log("Error al obtener datos del usuario local: ", error.message)
            }
        })()
    },[])

    return (
    <NavigationContainer>
        {user ? <TabNavigator /> : <AuthNavigator/>}
    </NavigationContainer>

    )
    
}

export default MainNavigator