import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigations/MainStackNavi";
import { View, Text, Image, StyleSheet } from "react-native";
import { Metrics } from "../styles/Metrics";
import { TouchableOpacity } from "react-native-gesture-handler";
let ratingWidth: number
const ProductDetailsScreen = (props: StackScreenProps<RootStackParamList, 'ProductDetails'>) => {
    const product = props.route.params.product;
    ratingWidth = (product.rating / 5) * 100;
    return (
        <View style={styles.productConteiner}>
            <Image style={styles.image} source={{ uri: product.thumbnail }} />
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

const styles = StyleSheet.create({
    productConteiner: {
        width: Metrics.measure(320),
        height: Metrics.measure(650),
        backgroundColor: "#fff",
        borderRadius: Metrics.measure(10),
        marginVertical: Metrics.measure(10),
        marginHorizontal: Metrics.measure(20),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
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
        top: Metrics.measure(4),
        right: Metrics.measure(30),
        fontSize: Metrics.measure(40),
        fontWeight: "bold",
        color: 'black'
    },
    priceTitle: {
        position: "absolute",
        top: Metrics.measure(25),
        right: Metrics.measure(10),
        fontSize: Metrics.measure(16),
        fontWeight: "bold",
        color: 'black',
    },
    priceConteiner: {
        position: "absolute",
        top: Metrics.measure(210),
        borderColor: '#3E22EA',
        borderWidth: 1,
        left: Metrics.measure(10),
        width: Metrics.measure(300),
        height: Metrics.measure(60),
        borderRadius: Metrics.measure(10),

    },
    discount: {
        position: "absolute",
        top: Metrics.measure(3),
        left: Metrics.measure(10),
        color: '#3E22EA',
        fontWeight: "bold",
        fontSize: Metrics.measure(24),
    },
    discountText: {
        position: "absolute",
        top: Metrics.measure(30),
        left: Metrics.measure(10),
        fontSize: Metrics.measure(21),
        fontWeight: "bold",
        color: '#B6AEE2'

    },
    description: {
        position: "absolute",
        top: Metrics.measure(280),
        left: Metrics.measure(10),
        right: Metrics.measure(10),
        fontSize: Metrics.measure(18),
        color: '#404040',
    },
    button: {
        borderColor: '#3E22EA',
        borderWidth: 1,
        backgroundColor: '#3E22EA',
        width: Metrics.measure(300),
        height: Metrics.measure(60),
        borderRadius: Metrics.measure(10),
        paddingLeft: Metrics.measure(10),
        marginTop: Metrics.measure(550),
        marginLeft: Metrics.measure(10),
    },
    addToCart: {
        color: '#fff',
        fontSize: Metrics.measure(22),
        fontWeight: "bold",
        marginTop: Metrics.measure(15),
        alignSelf: 'center'

    },
    ratingBar: {
        position: "absolute",
        height: Metrics.measure(30),
        borderRadius: Metrics.measure(3),
        backgroundColor: '#3E22EA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ratingText: {
        color: '#fff',
        fontSize: Metrics.measure(20),
        fontWeight: "bold",

    },
    mainRatingBar: {
        position: "absolute",
        top: Metrics.measure(158),
        right: Metrics.measure(10),
        width: Metrics.measure(90),
        height: Metrics.measure(30),
        borderRadius: Metrics.measure(3),
        backgroundColor: '#B6AEE2',

    }
});
