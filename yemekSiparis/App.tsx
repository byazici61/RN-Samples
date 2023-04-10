import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Alert} from 'react-native';
import NumericInput from 'react-native-numeric-input'
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function App() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [value, setValue] = useState(0)
  const [text, setText] = useState('')

  const _onPressButton = () => {
    Alert.alert('Siparişiniz Alinmiştir ','\nSipariş Adeti: ' + value
    + '\nSoğan Durumu: ' + (toggleCheckBox ? 'Var' : 'Yok')
    +'\nNot: ' + text)
  }
  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerText}>Yemek Siparişi</Text>

      </View>
      <View style = {styles.bodyFirst}>
        <Text style = {styles.bodyText}>Porsiyon</Text>
      <NumericInput onChange ={(value:number ) => setValue(value) } type='plus-minus' />
      </View>
      <View style = {styles.bodySecond}>
        <Text style = {styles.bodyText}>Soğanlı Olsun Mu?</Text>
        <Checkbox
          style={styles.checkbox}
          value={toggleCheckBox}
          onValueChange={setToggleCheckBox}
          color={toggleCheckBox ? '#4630EB' : undefined}
        />

      </View>
      <View style = {styles.bodyThird}>
        <Text style = {styles.bodyText}>Not</Text>
        <TextInput multiline style ={styles.textInput} onChangeText={(text :string) => setText(text)}></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={_onPressButton}>
        <Text style={styles.buttonTextStyle}>Siparişi Ver</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',

  },
  header: {
    height: 100,  
    backgroundColor: 'red',
    alignItems: 'center',

  },
  headerText: {
    color: 'white',
    paddingTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
  bodyFirst: {
    height: 150,
    paddingLeft: 20,
    backgroundColor: 'grey',
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 50,
  },
  bodyText: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  bodySecond : {
    height: 150,
    paddingLeft: 20,
    backgroundColor: 'grey',
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 50,
  },
  checkbox: { 
    paddingTop: 10,
    marginTop: 15,
    marginRight: 19,
    borderColor: 'red',
  },
  bodyThird : {
    height: 250,
    backgroundColor: 'grey',
    paddingLeft: 50,
    justifyContent:'flex-start',
  },
  textInput: {
    height: 130,
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    marginTop: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 50,
  },
  buttonTextStyle: {
    
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    paddingTop: 10
  }
});
