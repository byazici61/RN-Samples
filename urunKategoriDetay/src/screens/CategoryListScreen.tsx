import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { Product } from "../components/Types/Type";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/screenStyles/CategoryListScStyle";


const CategoryList = () => {

    const navigation = useNavigation();
    const { productInfo } = useProducts();
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

    const _onPress_Category = (categoryname: string) => {
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
                        <TouchableOpacity
                            onPress={() => _onPress_Category(item)}>
                            <Text style={styles.categoryText} >{item.charAt(0).toUpperCase()+item.slice(1)}</Text>
                        </TouchableOpacity>
                    </View>
                )
                }
                keyExtractor={(item) => item}
            />
        </View>
    );
}

export default CategoryList;    