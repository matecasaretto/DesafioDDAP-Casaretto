import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Card from './Card';
import { colors } from '../global/colors';


const CartItem = ({ item }) => {
  return (
    <Card style={styles.container}>
      <Image
        style={styles.imageCart}
        resizeMode='cover'
        source={{ uri: item.images[0] }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text>
          Cantidad: {item.quantity}, total: ${item.price * item.quantity}
        </Text>
      </View>
      <TouchableOpacity onPress={null} style={styles.button}>
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    </Card>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: colors.quartary,
  },
  imageCart: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  brand: {
    color: colors.quinary,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  button: {
    backgroundColor:colors.primary,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.quinary,
    fontWeight: 'bold',
  },
});
