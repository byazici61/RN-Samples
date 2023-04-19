import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigations/MainStackNavi";
import { View, Text, Image, TouchableOpacity,TextInput } from "react-native";
import styles from "../styles/screenStyles/ProductDetailsScStyle";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../components/Types/Type";
import { useSelector, useDispatch } from 'react-redux';
import { SELECTORS, ACTION_CREATORS } from "../../Redux/AddToCartRedux";
import { CartProduct } from "../components/Types/Type"
import { useState } from "react";
const ProductDetailsScreen = (props: StackScreenProps<RootStackParamList, 'ProductDetails'>) => {
    const product = props.route.params.product;
    const ratingWidth = (product.rating / 5) * 100;
    //const isProductInCart = useSelector(SELECTORS.isProductInCart(product.id)));
    const cartList = useSelector(SELECTORS.CartList);
    const dispatch = useDispatch();
    const[quantity,setQuantity]=useState(1);
    console.log("cart list ", cartList);
    const cartProduct = {
        product: product,
        quantity: quantity,
    }
    
    const _onPress = () => {

        dispatch(ACTION_CREATORS.addToCart(cartProduct));

    };
    return (
        <View style={styles.productConteiner}>
            <Image
                style={styles.image}
                source={{ uri: product.thumbnail }} />
            <Text style={styles.productTitle}>{product.title}</Text>
            <View style={styles.mainRatingBar}>
                <View style={[styles.ratingBar, { width: ratingWidth }]}>
                    <Text style={styles.ratingText}>{product.rating}</Text>
                </View>
            </View>
            <Text style={styles.brand}>{product.brand}</Text>
            <View style={styles.priceConteiner}>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.priceTitle}> TL</Text>
                <Text style={styles.discount}>%{product.discountPercentage}</Text>
                <Text style={styles.discountText}>İNDİRİM</Text>
            </View>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.quantityConteiner}>
                <Text style={{color:"white"}}>Adet</Text>
                <TextInput
                onChangeText={(quantity)=>setQuantity(parseInt(quantity))}
                placeholder="1"
                style={{color:"black",backgroundColor:"white"}}></TextInput>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={_onPress}>
                <Text style={styles.addToCart}>Sepete Ekle</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ProductDetailsScreen;
