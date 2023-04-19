import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { SELECTORS, ACTION_CREATORS } from "../../Redux/AddToCartRedux";
import { CartProduct } from "../components/Types/Type";
import { useState } from "react";


const CartScreen = () => {

    const cartList = useSelector(SELECTORS.CartList);
    const dispatch = useDispatch();
    const _onPress = (item: CartProduct) => {
        dispatch(ACTION_CREATORS.removeFromCart(item));
    };

    const [totalPrice, setTotalPrice] = useState(0);
    const _renderItem = (item: CartProduct) => {
        //setTotalPrice(totalPrice + item.product.price * item.quantity)
        return (
            <View style={styles.itemConteiner} >
                <Text>{item.product.brand}</Text>
                <Text>{item.product.title}</Text>
                <Text>Adet Fiyatı ={item.product.price} TL</Text>
                <Text  >Toplam Fiyat ={item.product.price * item.quantity} TL</Text>
                <Text>{item.quantity} Adet </Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => _onPress(item)}
                >
                    <Text style={styles.buttonText}>Kaldır</Text>
                </TouchableOpacity>

            </View>
        )

    }
    return (
        <View style={styles.cartListConteiner}>
            <View style={styles.cartListHeader}>
                <Text style={styles.cartListHeaderText}>Sepetim</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cartList}

                renderItem={({ item }) => _renderItem(item)}
                keyExtractor={(item) => item.product.id.toString()}
            />
            <Text>Toplam Fiyat ={totalPrice} TL</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cartListConteiner: {
        flex: 1,
        backgroundColor: 'white',
    },
    cartListHeader: {
        backgroundColor: 'red',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartListHeaderText: {
        color: 'white',

    },
    itemConteiner: {
        backgroundColor: 'grey',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    button: {
        backgroundColor: 'red',
        width: 100,
        height: 30,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },








});
export default CartScreen;