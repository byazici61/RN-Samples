import { StyleSheet } from "react-native";
import { Metrics } from "../Metrics";

const styles = StyleSheet.create({
    categoryConteiner: {

        backgroundColor: 'white',
        borderColor: '#C3C3C3',
        borderWidth: 1,
        borderRadius: Metrics.measure(10),
        paddingHorizontal: Metrics.measure(10),
        marginHorizontal: Metrics.measure(10),
        marginTop: Metrics.measure(10),
        marginVertical: Metrics.measure(5),
        height: Metrics.measure(49),
    },
    header: {
        backgroundColor: "white",
        height: Metrics.measure(74),
        width: Metrics.measure(428),
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#A7A7A7",
        borderBottomWidth: 1,
    },
    headerText: {
        top: Metrics.measure(10),
        fontSize: Metrics.measure(20),
        fontWeight: "bold",
        color: "#3E22EA",
        right: Metrics.measure(30),
    },
    categoryText: {
        fontSize: Metrics.measure(20),
        fontWeight: 'bold',
        color: 'black',
        alignItems: 'center',
        margin: Metrics.measure(10),
    },
});
export default styles;