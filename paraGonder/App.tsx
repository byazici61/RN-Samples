import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';


export default function App() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [accountNumber, setAccountNumber] = useState('Kendi hesabım')
  const [amount, setAmount] = useState('0')
  
  
  const _onPressButton = () => {

    Alert.alert("Para Gönderme", "Hesap: " + accountNumber + " Miktar: " + amount + " TL")

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PARA GÖNDER</Text>
      </View>
      <View style = {styles.bodyFirst}> 
        <Checkbox
        style={styles.checkbox}
        value={toggleCheckBox}
        onValueChange={setToggleCheckBox}
        color={toggleCheckBox ? 'black' : undefined}/>
       <Text style={styles.bodyText}>Başka Hesaba mı para göndermek istiyorsunuz?</Text>
      </View>
      <View style = {styles.bodySecond}>
        
      {toggleCheckBox && (
          <TextInput
            keyboardType="numeric"
            style={styles.textInput}
            onChangeText={(accountNumber: string) => {
              setAccountNumber(accountNumber);
            }}
            placeholder="Hesap No giriniz..."
          />
        )}
        <TextInput onChangeText={(amount:string) =>{setAmount(amount)}} style = {styles.textInput} placeholder='Miktar Giriniz..' keyboardType='numeric'/>
      </View>
      <View style = {styles.bodyThird}>
        <TouchableOpacity style={styles.button} onPress={_onPressButton}>
          <Text style={{color:'orange', fontSize: 20, fontWeight: 'bold'}}>GÖNDER</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  header: {
    height: 100,  
    backgroundColor: 'black',
    alignItems: 'center',

  },
  headerText: {
    color: 'orange',
    paddingTop: 50,
    fontSize: 30,
    fontWeight: 'bold'
  },
  checkbox: { 
    marginLeft:20,
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    borderColor: 'red',
  },
  bodyFirst: {
    flexDirection: 'row',
    backgroundColor:'pink',
    height: 100,
    alignItems: 'center', 
  },
  bodyText: {
    paddingTop: 10, 
    paddingLeft: 10, 
    fontSize: 20, 
    fontWeight: 'bold'
  },
  bodySecond: {
    backgroundColor:'pink',
    height: 300,
    //justifyContent: 'center', 
    paddingLeft:74,
  },
  textInput: {
    paddingLeft:10,
    height: 40,
    width: 250,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 120,
  },
  bodyThird: {
    flexDirection: 'row',
    backgroundColor:'pink',
    flex: 1,
    alignItems: 'center', 


  }

});
