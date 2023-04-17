import { View, Text} from "react-native";
import React from "react";
import styles from "../styles/componentStyles/HeadStyle";
const Head = () => {
  return (
    <View
      style={styles.headContainer}>
      <Text style={styles.headerTxt}>Tüm Ürünler</Text>
    </View>
  );
};
export default Head;
