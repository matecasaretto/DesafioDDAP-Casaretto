import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CartItem from '../components/CartItem';
import { usePostOrderMutation } from '../services/shopService';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cartSlice';
import { emptyCart } from '../features/cartSlice';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


const CartScreen = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  const total = useSelector((state) => state.cartReducer.total);
  const [triggerPost, result] = usePostOrderMutation();
  const dispatch = useDispatch();

  const [purchaseSuccessful, setPurchaseSuccessful] = useState(false);


  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

 const redenderCartItem = ({ item }) => {
    return <CartItem item={item} onRemoveItem={handleRemoveItem}/>;
  };

  const confirmCart = () => {
    triggerPost({ total, cartItems, user: 'Logged User' });
    dispatch(emptyCart());
    console.log('Compra exitosa')

    setPurchaseSuccessful(true);

    setTimeout(() => {
      setPurchaseSuccessful(false);
    }, 2000);

  };



  return (
    <View style={styles.container}>
      {purchaseSuccessful && (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessage}>¡Tu compra fue exitosa!</Text>
          <Ionicons name="checkmark-circle" size={35} color="black" />
        </View>
      )}
      <FlatList
        data={cartItems}
        renderItem={redenderCartItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.summaryContainer}>
        <Text style={styles.totalText}>Total: {total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  summaryContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
    alignItems: 'center',
    marginBottom: 70,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successMessageContainer: {
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center'
  },
  successMessage: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center'
  },
});

export default CartScreen;
