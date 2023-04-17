import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { Product } from "../components/Types/Type";
import { Metrics } from "../styles/Metrics";
import { useNavigation } from "@react-navigation/native";


const CategoryList = () => {

    const navigation = useNavigation();
    const { productInfo} = useProducts();
    const [Categories, setAllCategories] = useState<Product[]>(productInfo);

    useEffect(() => {
        setAllCategories(productInfo);
    }, [productInfo]);
    const category: string[] = [];

    Categories.forEach(element => {
        if (!category.includes(element.category)) {
            category.push(element.category);
        }
    });
    //console.log('asdasd ' + category.length);
    const _onPress_Category = (categoryname:string) => {
        //console.log(navigation.getState())
        navigation.navigate('CategoryToProduct', { categoryname: categoryname });
    };
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Kategoriler</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={category}
                renderItem={({ item }) => (
                    <View style={styles.categoryConteiner}>

                        <TouchableOpacity onPress={()=>_onPress_Category(item)}>
                            <Text style={styles.categoryText} >{item.toLocaleUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>
                )
                }
                keyExtractor={(item) => item.toString()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    categoryConteiner: {

        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: Metrics.measure(10),
        paddingHorizontal: Metrics.measure(10),
        marginHorizontal: Metrics.measure(10),
        marginTop: Metrics.measure(10),
        marginVertical: Metrics.measure(5),
        height: Metrics.measure(50),
    },
    header: {
        backgroundColor: "white",
        height: Metrics.measure(80),
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    headerText: {
        top: Metrics.measure(10),
        fontSize: Metrics.measure(20),
        fontWeight: "bold",
        color: "#3E22EA"
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        alignItems: 'center',
        margin: Metrics.measure(10),
    },
});
export default CategoryList;    