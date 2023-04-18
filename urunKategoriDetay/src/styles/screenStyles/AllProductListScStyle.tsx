import { StyleSheet } from "react-native";
import { Metrics } from "../Metrics";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E7EAED",
        alignItems: "center",

    },
    allBtn: {
        position: "absolute",
        width: "40%",
        height: Metrics.measure(40),
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: Metrics.measure(10),
        borderBottomLeftRadius: Metrics.measure(10),
        top: Metrics.measure(90),
        left: Metrics.measure(36),
    },
    favouriteBtn: {
        position: "absolute",
        width: "40%",
        height: Metrics.measure(40),
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: Metrics.measure(10),
        borderBottomRightRadius: Metrics.measure(10),
        top: Metrics.measure(90),
        right: Metrics.measure(36),
    },
    titleStyle: {
        fontSize: Metrics.measure(15),
    },
});
export default styles;