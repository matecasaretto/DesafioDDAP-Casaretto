import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Search = ({onSearchHandlerEvent}) => {

    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState ('')

    const onSearchHandlerError = () => {
        const regEx = /[^\w\s]/
        if(regEx.test(searchInput)){
            setError('Caracteres invalidos')
            setSearchInput("")
        }else{
            setError("")
            onSearchHandlerEvent(searchInput)
        }
    }

    const onResetSearch = () => {
        setSearchInput("")
        onSearchHandlerEvent(searchInput)
    }

  return (
    <>
    <View style={styles.searchContainer}>
      <TextInput
      style={styles.TextInput}
      onChangeText={setSearchInput}
      placeholder='Buscar...'
      value={searchInput}>
      </TextInput>
      <TouchableOpacity onPress={()=>onSearchHandlerError(searchInput)}>
            <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onResetSearch}>
            <Entypo name="cross" size={24} color="black" />
      </TouchableOpacity>
    </View>
    {
        error?<View><Text>{error}</Text></View>:null
    }
    </>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent:  'space-between',
        padding: 5,
        backgroundColor: '#fff'
    },
    TextInput: {
        width: '80%'
    }
})