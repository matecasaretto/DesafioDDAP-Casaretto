import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
//import products_data from '../data/products_data.json' 
import ProductItem from '../components/ProductItem'
import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Search from '../components/Search'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/shopService'

const ProductsByCategoryScreen = ({navigation, route}) => {

  const [ProductsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')
  
  
  const category = useSelector(state=>state.shopReducer.categorySelected)

  const {data: productsFilterByCategory, isLoading, error} = useGetProductsByCategoryQuery(category)

  useEffect(()=>{
   
    if(!isLoading){
      const productsValues = Object.values(productsFilterByCategory)//Utilizamos esta funcion para solamente obtener los valores desde firebase
      const productsFiltered = productsValues.filter(
        product=>product.title.toLowerCase().includes(search.toLocaleLowerCase()))
      setProductsByCategory(productsFiltered)
    }
  },[category, search])

  const renderProductItem = ({item}) =>(
    <ProductItem item={item} navigation={navigation}/>
  )

    const onSearch = (search) => {
      setSearch(search)
    }
  return (
    <>
    {
      isLoading
      ?
      <ActivityIndicator/>
      :
      <>
      <Search onSearchHandlerEvent = {onSearch}/>
    <Card>
      <FlatList
    style={styles.FlatListEstilos}
    data={ProductsByCategory}
    renderItem={renderProductItem}
    keyExtractor={item=> item.id}/>
    </Card> 
    </>
    }
    </>

  )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
  containerRenderItem: {
    flex: 1,
  },
  FlatListEstilos: {
    height: '100%'
  }
})