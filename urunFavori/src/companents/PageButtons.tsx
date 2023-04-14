import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Metrics } from '../style/Metrics';
import styles from '../style/style';

const PageButtons = () => {

    return (
        <View style={styles.pageButtons}>

            <TouchableOpacity style={[styles.pageButton, {
                borderTopLeftRadius: Metrics.measure(10),
                borderBottomLeftRadius: Metrics.measure(10),
            }]}>
                <Text style={styles.pageButtonText}>Tümünü Göster</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pageButton, {
                borderTopRightRadius: Metrics.measure(10),
                borderBottomRightRadius: Metrics.measure(10),
            }]}>
                <Text style={styles.pageButtonText}>Favorileri Göster</Text>
            </TouchableOpacity>
        </View>

    );
};
export default PageButtons;