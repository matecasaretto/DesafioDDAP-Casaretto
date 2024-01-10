import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Card from './Card';
import { EvilIcons } from '@expo/vector-icons'; 
import { colors } from '../global/colors';

const OrderItem = ({ order, total }) => {
  return (
    <Card style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.dateText}>
            Creada el {new Date(order.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.totalText}>Total: ${total}</Text>
      </View>
      <TouchableOpacity onPress={null} style={styles.iconContainer}>
        <EvilIcons name="search" size={24} color="black" />
      </TouchableOpacity>
    </Card>
  );
};

export default OrderItem;

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
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  dateText: {
    fontSize: 16,
    color: colors.quinary, 
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary, 
    marginTop: 8,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});

