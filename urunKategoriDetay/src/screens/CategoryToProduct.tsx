import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigations/MainStackNavi"
import useProducts from "../hooks/useProducts";
import { useEffect, useState } from "react";
import { Product } from "../components/Types/Type";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/screenStyles/CategoryToProductStyle";

const CategoryToProduct = (props: StackScreenProps<RootStackParamList, 'CategoryToProduct'>) => {
  const { productInfo } = useProducts();
  const [allProducts, setAllProducts] = useState<Product[]>(productInfo);
  useEffect(() => {
    setAllProducts(productInfo);
  }, [productInfo]);
  const navigation = useNavigation();
  const category = props.route.params.categoryname;

  return (
    <FlatList
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      data={allProducts.filter((item) => item.category === category)}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetails', { product: item })}>
            <View style={styles.productContainer}>
              <Image
                style={styles.image}
                source={{ uri: item.thumbnail }} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.priceTitle}> TL</Text>
              <Text style={styles.brand}>{item.brand}</Text>
            </View>
          </TouchableOpacity>
        );
      }
      }

      keyExtractor={(item) => item.id.toString()}
    />
  );
}
export default CategoryToProduct;
