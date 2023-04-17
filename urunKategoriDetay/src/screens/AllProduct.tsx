import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import useProducts from "../hooks/useProducts";
import { Metrics } from "../styles/Metrics";
import { FontAwesome } from "@expo/vector-icons";
import { ProductListProps, Product } from "../components/Types/Type";
import { useNavigation } from "@react-navigation/native";

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
    //console.log(setFavoriteProducts);
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
          <TouchableOpacity onPress={()=>_onPress_Product(item)}>
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
            <Image style={styles.image} source={{ uri: item.thumbnail }} />
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
const styles = StyleSheet.create({
  flatList: {
    alignSelf: "center",
    left: Metrics.measure(20),
    width: "100%",
    height: "100%",
    top: Metrics.measure(60),
  },
  productContainer: {
    backgroundColor: "white",
    width: Metrics.measure(320),
    height: Metrics.measure(210),
    borderRadius: Metrics.measure(10),
    marginVertical: Metrics.measure(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    position: "absolute",

    width: Metrics.measure(320),
    height: Metrics.measure(150),
    top: Metrics.measure(-10),
    borderTopLeftRadius: Metrics.measure(10),
    borderTopRightRadius: Metrics.measure(10),
    marginVertical: Metrics.measure(10),
    resizeMode: "contain",
  },
  productTitle: {
    position: "absolute",
    top: Metrics.measure(158),
    left: Metrics.measure(10),
    fontSize: 20,
    fontWeight: "bold",
  },
  brand: {
    position: "absolute",
    top: Metrics.measure(180),
    left: Metrics.measure(10),
    fontSize: Metrics.measure(15),
    fontWeight: "300",
  },
  price: {
    position: "absolute",
    top: Metrics.measure(155),
    right: Metrics.measure(30),
    fontSize: Metrics.measure(36),
    fontWeight: "bold",
    color: "#3E22EA",
  },
  priceTitle: {
    position: "absolute",
    top: Metrics.measure(180),
    right: Metrics.measure(10),
    fontSize: Metrics.measure(15),
    fontWeight: "bold",
    color: "#3E22EA",
  },
  fav: {
    position: "absolute",
    top: Metrics.measure(10),
    right: Metrics.measure(10),
    width: Metrics.measure(30),
    height: Metrics.measure(30),
    borderRadius: Metrics.measure(50),

    backgroundColor: "lightgrey",
    alignItems: "center",
    zIndex: 1,
    justifyContent: "center",
  },
});
