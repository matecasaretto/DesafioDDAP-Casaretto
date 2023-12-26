import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders_data from '../data/orders_data.json'
import OrderItem from '../components/OrderItem'

const OrderScreen = () => {

   const renderOrderItem = ({item}) =>{
    const total = item.items.reduce((acumulator, currentItem) =>(
        acumulator+=currentItem.price*currentItem.quantity
    ),0)

    return(
        <OrderItem order={item} total={total}/>
    )
   }


  return (
   <FlatList
   data={orders_data}
   renderItem={renderOrderItem}
   keyExtractor={item=>item.id}/>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})