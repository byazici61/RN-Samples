import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View,Dimensions,Image} from 'react-native';
const viewWidth=Dimensions.get("window").width;

export default function App() {
  const data = [
    {
      id: 1,
      name: "Bitcoin",
      volume: 1232412343,
      price: 10713.2312,
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/btc@2x.png",
    },
    {
      id: 2,
      name: "Etherium",
      volume: 1232412343,
      price: 10713.2312,
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/eth@2x.png",
    },
    {
      id: 3,
      name: "XRP",
      volume: 1232412343,
      price: 10713.2312,
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/xrp@2x.png",
    },
    {
      id: 4,
      name: "Litecoin",
      volume: 1232412343,
      price: 10713.2312,
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/ltc@2x.png",
    },
    {
      id: 5,
      name: "Bitcoin Cash",
      volume: 1232412343,
      price: 10713.2312,
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/bch@2x.png",
    },
    {
      id: 6,
      name: "Tether",
      volume: 1232412343,
      price: 10713.2312,
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/usdt@2x.png",
    },
    {
      id: 7,
      name: "EOS",
      volume: 1232412343,
      price: 10713.2312,
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/eos@2x.png",
    },
    {
      id: 8,
      name: "Binance Coin",
      volume: 1232412343,
      price: 10713.2312,
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/bnb@2x.png",
    },
  ];
  return (
    //console.log(data),
    <View>
      <View style={styles.container}>
      <Text style={styles.navbartitle} >Show Me The Coin</Text>
      <Text >04.04.2023,23:54</Text>
      <Text style={{position:'absolute',left : 10,top:60,fontSize:15}}>Left</Text>
      <Text style={{position:'absolute',right : 10,top:60,fontSize:15}}>Right</Text>
      <StatusBar style="auto" />
      </View>
      <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
        <Image source={{ uri: item.icon }} style={styles.logo} />
        
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.volume}>Volume: {item.volume}</Text>
          <Text style={styles.price}>$: {item.price}</Text>
          <Text style={styles.rank}>#{item.id}</Text>
      </View>
      )} />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    height : 100,
  },
  navbartitle : {
    color : 'black',
    textAlign :'center',
    paddingTop: 20,
    fontSize : 20,
    fontStyle :'normal',
    fontWeight : 'bold',
  },
  itemContainer:{
    width:viewWidth,
    height:100,
    padding:20,
    borderBottomColor:'gray',
    borderBottomWidth:1,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 10,
  },
  name:{
    marginLeft:65,
    marginTop:-60,
    fontSize:20,
    fontWeight:'bold',
  },
  volume:{
    marginLeft:65,
    color:'gray',
  },
  price:{
    marginLeft:65,
  },
  rank:{
    position:'absolute',
    right:10,
    top:35,
    fontSize : 25,
    fontWeight : 'bold',
  },
});

