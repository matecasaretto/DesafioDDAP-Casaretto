import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import { useState } from 'react';
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {
  

  const [fontLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  })

 if(!fontLoaded) return <ActivityIndicator />

 const onSelectCategory = (category) => {
  setCategorySelected(category)
 } 

 const onSelectProductId = (productId) =>{
  setProductIdSelected(productId)
 }

  return (
   <Provider store={store}>
    <TabNavigator/>
   </Provider>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
