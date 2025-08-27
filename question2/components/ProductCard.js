import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const ProductCard = ({ item, onPress}) => {
   return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={3}>
        {item.title}
      </Text>
      <Text style={styles.price}>R {item.price}</Text>
    </TouchableOpacity>
  );
}

export default ProductCard

const styles = StyleSheet.create({
  card: 
    {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        alignItems: 'center',
    },

    image: 
    { 
        width: 80,
        height: 80, 
        resizeMode: 'contain', 
        marginBottom: 5 
    },

    title: 
    { 
        fontSize: 14, 
        textAlign: 'center', 
        marginBottom: 5 
    },

    price: 
    { 
        fontSize: 14, 
        fontWeight: 'bold', 
    },
});