import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import {colors} from '../global/colors'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.quinary,
        shadowOffset:{
            width: 4,
            height: 5
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})