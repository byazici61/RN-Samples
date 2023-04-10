import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react';

let takdir = "";
export default function App() {
  const [time, setTime] = useState(0);
  const [number, setNumber] = useState(0);
  const [status, setStatus] = useState(1);

  const hesapla = () => {
    if(time*number*status>30){
      takdir= "Mükemmelsin";
    }
    else if(time*number*status<15){
      takdir= "Sağlık olsun";
    }
    else{
      takdir= "İyi iş çıkardın";
    }


  }
  //alert("Time: " + time + " Number: " + number + " Status: " + status + " Takdir: " + takdir);
  hesapla();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Taktirname</Text>
      </View>
      <View style={styles.bodyFirst}>
        <Text style={styles.bodyText}>Çalıştığım Süre:</Text>
        <NumericInput onChange={(time : number)=> {setTime(time)}} borderColor={'cyan'} leftButtonBackgroundColor={'cyan'} rightButtonBackgroundColor={'cyan'}/>
      </View>
      <View style={styles.bodyFirst}>
        <Text style={styles.bodyText}>Bitirdiğim İş Sayısı:</Text>
        <NumericInput onChange={(number : number )=> {setNumber(number)}} borderColor={'cyan'} leftButtonBackgroundColor={'cyan'} rightButtonBackgroundColor={'cyan'}/>
      </View>
      <Text style={styles.freeText}>Zorluk Seviyesi : </Text>
      <View style={styles.bodyFirst}>
        <TouchableOpacity onPress={(number)=> {setStatus(1)}} style={styles.button}>
          <Text style={styles.buttonText}>Kolay</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={(number)=> {setStatus(2)}} style={styles.button}>
          <Text style={styles.buttonText}>Orta</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={(number)=> {setStatus(3)}} style={styles.button}>
          <Text style={styles.buttonText}>Zor</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.freeText}>Takdir : </Text>
      <TextInput placeholder="Takdir" style={styles.textInput} multiline={true} value={takdir}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    

  },
  header: {
    height: 100,  
    backgroundColor: 'cyan',
    alignItems: 'center',
    
  },
  headerText: {
    color: 'white',
    paddingTop: 50,
    fontSize: 30,
    fontWeight: 'bold'
  },
  bodyFirst: {
    flexDirection: 'row',
    backgroundColor:'white',
    height: 100,
    padding : 20,
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  bodyText: {
    paddingTop: 10, 
    paddingLeft: 10, 
    fontSize: 20, 
    fontWeight: 'bold'
  },
  freeText: {
    paddingTop: 20,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'cyan', 
    width: 100, 
    height: 50, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  textInput: {
    borderColor: 'cyan', 
    borderWidth: 1, 
    margin: 20, 
    padding: 10,
    height: 100,
    textAlign: 'center',
    
  }



});
