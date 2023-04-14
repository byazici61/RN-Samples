import { StatusBar, StyleSheet } from 'react-native';
import { Metrics } from './Metrics';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        paddingTop: Metrics.measure(10),
        backgroundColor: '#C3C3C3'
    },
    itemConteiner: {

        backgroundColor: '#ffffff',
        width: Metrics.measure(350),
        height: Metrics.measure(80),
        marginBottom: Metrics.measure(10),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: Metrics.measure(10),
        borderBottomRightRadius: Metrics.measure(10),
        paddingHorizontal: Metrics.measure(10),
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: Metrics.measure(36),
        color: '#3E22EA',
        fontWeight: 'bold',
        marginLeft: 'auto',
    },
    brand: {
        fontSize: 16,
    },

    image: {
        //elevation: 1,
        borderTopLeftRadius: Metrics.measure(10),
        borderTopRightRadius: Metrics.measure(10),
        width: Metrics.measure(350),
        height: Metrics.measure(150),

    },
    imageConteiner: {
        elevation: 0,
        alignItems: 'center',

    },
    favButtonText: {
        width: Metrics.measure(40),
        height: Metrics.measure(40),
        color: 'red',
    },
    favButton: {
        borderColor: 'red',
        borderWidth: Metrics.measure(10),
        elevation: 1,
    },
    pageButtons: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        justifyContent: 'center',
        paddingHorizontal: Metrics.measure(10),
        marginBottom: Metrics.measure(10),
    },
    pageButton: {
        backgroundColor: '#ffffff',
        borderColor: 'grey',
        borderWidth: Metrics.measure(1),
        width: Metrics.measure(175),
        height: Metrics.measure(30),

    },
    pageButtonText: {
        fontSize: Metrics.measure(16), 
        alignSelf: 'center',
        justifyContent: 'center',
        //height: Metrics.measure(30)
    }

});
export default styles;