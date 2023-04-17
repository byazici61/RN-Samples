import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigations/MainStackNavi";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../styles/screenStyles/ProductDetailsScStyle";
const ProductDetailsScreen = (props: StackScreenProps<RootStackParamList, 'ProductDetails'>) => {
    const product = props.route.params.product;
    const ratingWidth = (product.rating / 5) * 100;
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
            <TouchableOpacity style={styles.button}>
                <Text style={styles.addToCart}>Sepete Ekle</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ProductDetailsScreen;
