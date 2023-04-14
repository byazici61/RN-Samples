import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './src/style/style';
import PageButtons from './src/companents/PageButtons';
import RenderItem from './src/companents/RenderItem';
import Header from './src/companents/Header';


type ProductsData = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};


const DATA_URL = 'https://dummyjson.com/products';
const App = () => {
  const [data, setData] = useState<any>([]);
  const [pressed, setPressed] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(DATA_URL);
      const json: ProductsData = await response.json();
      setData(json.products);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <PageButtons />
      <FlatList
        data={data}
         //burda oluşturdğum usetatei renderitema gönderemedim 
        renderItem={({ item }) => <RenderItem item={item} pressed={pressed} setPressed={setPressed} />}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};
export default App;
