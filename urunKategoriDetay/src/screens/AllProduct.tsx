import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import useProducts from "../hooks/useProducts";
import { FontAwesome } from "@expo/vector-icons";
import { ProductListProps, Product } from "../components/Types/Type";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/screenStyles/AllProductStyle";

const AllProduct = (props: ProductListProps) => {
  const { productInfo } = useProducts();
  const { favoriteProducts = [], setFavoriteProducts } = props;

  const [allProducts, setAllProducts] = useState<Product[]>(productInfo);
  useEffect(() => {
    setAllProducts(productInfo);
  }, [productInfo]);

  const isFavorite = (product: Product) => {
    return favoriteProducts.some((fav) => fav.id === product.id);
  };

  const handleFavoritePress = (product: Product) => {
    const updatedFavorites = isFavorite(product)
      ? favoriteProducts.filter((fav) => fav.id !== product.id)
      : [...favoriteProducts, product];

    if (setFavoriteProducts) {
      setFavoriteProducts(updatedFavorites);
    }
  };
  const navigation = useNavigation();
  const _onPress_Product = (product: Product) => {
    console.log(product);
    navigation.navigate('ProductDetails', { product: product });
  };
  return (
    <FlatList
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      data={allProducts}
      renderItem={({ item }) => (
        <View style={styles.productContainer}>
          <TouchableOpacity
            style={styles.fav}
            onPress={() => handleFavoritePress(item)}
          >
            <FontAwesome
              name="heart"
              size={22}
              color={isFavorite(item) ? "red" : "white"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => _onPress_Product(item)}>

            <Image
              style={styles.image}
              source={{ uri: item.thumbnail }} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.priceTitle}> TL</Text>
            <Text style={styles.brand}>{item.brand}</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
export default AllProduct;
