import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json()).then(data => {
        setProducts(data);
        setLoading(false);
      }).catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;

  if (error) return <Text>Error loading products</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => navigation.navigate('Detail', { id: item.id })} 
          />
        )}
      />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: 
    { 
        flex: 1, 
        padding: 10, 
        backgroundColor: '#f5f5f5' 
    },
});
