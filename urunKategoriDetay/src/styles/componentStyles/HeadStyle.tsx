import { StyleSheet } from "react-native";
import { Metrics } from "../Metrics";
const styles = StyleSheet.create({
    headContainer: {
      backgroundColor: "white",
      height: Metrics.measure(74),
      width: Metrics.measure(428),
      alignItems: "center",
      justifyContent: "center",
      borderBottomColor: "#A7A7A7",
      borderBottomWidth: 1,
    },
    headerTxt: {
      top: Metrics.measure(10),
      fontSize: Metrics.measure(20),
      fontWeight: "bold",
      color: "#3E22EA",
    },
  });
  export default styles;