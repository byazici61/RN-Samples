import React from 'react';  
import { View, Text } from 'react-native';
import styles  from '../styles/Styles';


const Header = () => {
    return (
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>KISA NOTLAR</Text>
      </View>
    );
  };
  export default Header;