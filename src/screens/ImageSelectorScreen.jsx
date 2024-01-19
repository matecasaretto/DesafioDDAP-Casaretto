import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { colors } from '../global/colors'
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setProfilePicture } from '../features/authSlice';
import { usePutProfilePictureMutation } from '../services/shopService';



const ImageSelectorScreen = ({navigation}) => {
  const [image, setImage] = useState('')

  const localId = useSelector(state=>state.authReducer.localId)

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      return false
    }
    console.log("Permisos otorgados")
    return true
  }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2
      })
      if (!result.canceled) {
       
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    } else {
      console.log("No se han otorgado permisos para usar la cámara")
    }
  }

  const dispatch = useDispatch()

  const [triggerSaveProfilePicture, result] = usePutProfilePictureMutation()

  const confirmImage = () => {
    dispatch(setProfilePicture(image))
    triggerSaveProfilePicture({image, localId})
    navigation.goBack()
   }

  return (
    <View style={styles.container}>
      {
        image
          ?
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn} onPress={pickImage}>
                <Text style={styles.textBtn}>Tomar otra</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.btn, ...styles.btnConfirm }} onPress={confirmImage}>
                <Text style={styles.textBtn}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={styles.noImageContainer}>
            <MaterialIcons name="no-photography" size={200} color="#ccc" />
            <TouchableOpacity style={styles.btn} onPress={pickImage}>
              <Text style={styles.textBtn}>Abrir cámara</Text>
            </TouchableOpacity>
          </View>
      }
    </View>
  )
}
export default ImageSelectorScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'colors.quinary', 
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'colors.quartary', 
  },
  btn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'colors.primary', 
  },
  btnConfirm: {
    backgroundColor: 'colors.secondary', 
  },
  textBtn: {
    color: 'colors.quinary',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
