import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Metrics } from "../styles/Metrics";
const Head = () => {
  return (
    <View style={styles.headContainer}>
      <Text style={styles.headerTxt}>Ürünler</Text>
    </View>
  );
};

export default Head;
const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: "white",
    height: Metrics.measure(80),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  headerTxt: {
    top: Metrics.measure(10),
    fontSize: Metrics.measure(25),
    fontWeight:"bold",
  },
});
