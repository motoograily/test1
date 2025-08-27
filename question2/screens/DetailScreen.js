import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {

  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()).then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R {product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: 
    {
        flexGrow: 1,
        padding: 20, 
        backgroundColor: '#fff', 
        alignItems: 'center' 
    },

    image: 
    { 
        width: 200, 
        height: 200, 
        resizeMode: 'contain', 
        marginBottom: 20 
    },

    title: 
    { 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 10, 
        textAlign: 'center' 
    },

    price: 
    { 
        fontSize: 18, 
        color: 'green', 
        marginBottom: 10 
    },

    description: 
    { 
        fontSize: 14, 
        textAlign: 'center' 
    },
});
