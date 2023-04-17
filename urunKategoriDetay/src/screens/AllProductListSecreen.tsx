import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Head from '../components/Head'
import CustomButton from "../components/CustomButton";
import React, { useState } from "react";
import AllProduct from "./AllProduct";
import Favourites from "./Favourites";
import { Product } from "../components/Types/Type";
import styles from "../styles/screenStyles/AllProductListScStyle";

export default function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [isProduct, setIsProduct] = useState(true);

  const handleProduct = () => {
    setIsProduct(!isProduct);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Head />
      <CustomButton
        style={[
          styles.allBtn,
          { backgroundColor: isProduct ? "#3E22EA" : "white" },
        ]}
        title="Tümünü Göster"
        titleStyle={[
          styles.titleStyle,
          { color: isProduct ? "white" : "black" },
        ]}
        onPress={() => handleProduct()}
      />
      <CustomButton
        style={[
          styles.favouriteBtn,
          { backgroundColor: !isProduct ? "#3E22EA" : "white" },
        ]}
        title="Favorileri Göster"
        titleStyle={[
          styles.titleStyle,
          { color: !isProduct ? "white" : "black" },
        ]}
        onPress={() => handleProduct()}
      />

      {isProduct ? (
        <AllProduct
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          favoriteProducts={favoriteProducts}
          setFavoriteProducts={setFavoriteProducts}
        />
      ) : (
        <Favourites
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          favoriteProducts={favoriteProducts}
          setFavoriteProducts={setFavoriteProducts}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

