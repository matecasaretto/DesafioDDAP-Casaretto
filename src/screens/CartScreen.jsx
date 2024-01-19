import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'

const CartScreen = () => {


  const cartItems = useSelector(state=>state.cartReducer.items)
  const total = useSelector(state=>state.cartReducer.total)
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart=()=>{
    triggerPost({total, cartItems, user:"Logged User"})
  }


  const redenderCartItem = ({item}) =>{
    return(
      <CartItem item={item}/>
    )
  }

  return (
    <View>
      <FlatList
      data={cartItems}
      renderItem={redenderCartItem}
      keyExtractor={item=>item.id}/>

      <View>
        <Text>Total:{total}</Text>
        <TouchableOpacity onPress={confirmCart}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})