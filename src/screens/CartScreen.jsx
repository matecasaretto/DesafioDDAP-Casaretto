import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem'
import cart_data from '../data/cart_data.json'
import { useEffect, useState } from 'react'

const CartScreen = () => {

  const [ total, setTotal ] = useState(0)

  useEffect(()=>{
    const total = cart_data.reduce((acumulator, currentItem)=>(
      acumulator+=currentItem.price*currentItem.quantity
    ),0)
    setTotal(total)
  },[])



  const redenderCartItem = ({item}) =>{
    return(
      <CartItem item={item}/>
    )
  }

  return (
    <View>
      <FlatList
      data={cart_data}
      renderItem={redenderCartItem}
      keyExtractor={item=>item.id}/>

      <View>
        <Text>Total:{total}</Text>
        <TouchableOpacity onPress={null}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})