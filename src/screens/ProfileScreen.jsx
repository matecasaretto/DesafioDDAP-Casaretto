import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import user_data from "../data/user_data.json"
import { useSelector } from 'react-redux'
import { colors } from '../global/colors'


const ProfileScreen = ({navigation}) => {
  const image = useSelector(state=>state.authReducer.profilePicture)
  
  return (
    <>
    <View style={styles.container}>
        <View>
            <Pressable onPress={()=>navigation.navigate("Seleccionar imagen")}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8',
                    },
                    styles.imageContainer,
                ]}>
                {
                    image
                        ?
                        <Image
                            source={{uri:image}}
                            style={styles.profilePicture}
                            resizeMode='contain'
                        />
                        :
                        <Image
                            source={require('../../assets/img/user.png')}
                            style={styles.profilePicture}
                            resizeMode='contain'
                        />

                }
            </Pressable>
        </View>
        <View style={styles.userDataContainer}>
            <Text style={styles.userTitle}>{user_data.name}</Text>
            <Text style={styles.userData}>{user_data.role}</Text>
            <Text style={styles.userData}>Nivel: {user_data.level}</Text>
            <Text style={styles.userData}>Dirección: {user_data.address}</Text>
            <Text style={styles.userData}>{user_data.city}</Text>
        </View>
    </View>
    </>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.quinary,
  },
  imageContainer: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 10, 
  },
  userDataContainer: {
    marginTop: 20,
  },
  userTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  userData: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 5,
  },
});

export default ProfileScreen;
