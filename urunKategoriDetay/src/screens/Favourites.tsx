import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ProductListProps, Product } from "../components/Types/Type";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/screenStyles/FavouritesStyle";

const Favourites = (props: ProductListProps) => {
  const { favoriteProducts = [], setFavoriteProducts } = props;
  const isFavorite = (product: Product) => {
    return favoriteProducts.some((fav) => fav.id === product.id);
  };
  const navigation = useNavigation();

  const handleFavoritePress = (product: Product) => {
    const updatedFavorites = isFavorite(product)
      ? favoriteProducts.filter((fav) => fav.id !== product.id)
      : [...favoriteProducts, product];

    if (setFavoriteProducts) {
      setFavoriteProducts(updatedFavorites);
    }
    console.log(setFavoriteProducts);
  };

  return (
    <FlatList
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      data={favoriteProducts}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetails', { product: item })}>

          <View style={styles.productContainer}>
            <TouchableOpacity
              style={styles.fav}
              onPress={() => handleFavoritePress(item)}
            >
              <FontAwesome name="heart" size={22} color={"#ef233c"} />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={{ uri: item.thumbnail }} />
            <Text style={styles.productTitle}>{item.title}</Text>

            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.priceTitle}> TL</Text>
            <Text style={styles.brand}>{item.brand}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Favourites;


