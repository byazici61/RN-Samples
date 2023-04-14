import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './src/style/style';
import PageButtons from './src/companents/PageButtons';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductsData = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const DATA_URL = 'https://dummyjson.com/products';

const App = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(DATA_URL);
      const json: ProductsData = await response.json();
      setData(json.products);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View>
        <View style={styles.imageConteiner} >
          <Image style={styles.image} source={{ uri: item.thumbnail }} />
          
          <TouchableOpacity style={styles.favButton}>
            <Text style={styles.favButtonText}> + </Text>
          </TouchableOpacity>
         
        </View>
          <View style={styles.itemConteiner}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.brand}>{item.brand}</Text>

            </View>

            <Text style={styles.price}>{item.price} TL</Text>
          </View>
        </View>
      
    );
  };

  return (


    <SafeAreaView style={styles.container}>
      <PageButtons />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};
export default App;
