import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Product } from "../components/Types/Type";
import styles from "../styles/componentStyles/Product";

type ProductProps = {
    item: Product;
    favoriteProducts: Product[];
    setFavoriteProducts: (products: Product[]) => void;

};
const Products = (props: ProductProps) => {

    const { item, favoriteProducts, setFavoriteProducts } = props;
    const isFavorite = (product: Product) => {
        return favoriteProducts.some((fav) => fav.id === product.id);
    };
    console.log(item);
    const handleFavoritePress = (product: Product) => {
        const updatedFavorites = isFavorite(product)
            ? favoriteProducts.filter((fav) => fav.id !== product.id)
            : [...favoriteProducts, product];

        if (setFavoriteProducts) {
            setFavoriteProducts(updatedFavorites);
        }
        console.log(updatedFavorites);
    };
    return (
        <View
            style={styles.productContainer}>
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
            <Image
                style={styles.image}
                source={{ uri: item.thumbnail }} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.priceTitle}> TL</Text>
            <Text style={styles.brand}>{item.brand}</Text>
        </View>
    );
};



export default Products;




