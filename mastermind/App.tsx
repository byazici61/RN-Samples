import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>MASTERMIND</Text>
      </View>
      <View style ={styles.balls}>
      <View
          style={[styles.ball, { backgroundColor: "#ff7860", marginLeft: 15 }]}
        ></View>
        <View style={[styles.ball, { backgroundColor: "#97e241" }]}></View>
        <View style={[styles.ball, { backgroundColor: "#2ae2ea" }]}></View>
        <View style={[styles.ball, { backgroundColor: "#ffe622" }]}></View>
        <View style={styles.clue}>
          <View style={[styles.ballclue, { backgroundColor: "white" }]}></View>
          <View
            style={[styles.ballclue, { backgroundColor: "#ffb53c" }]}
          ></View>
          <View
            style={[
              styles.ballclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
          <View
            style={[
              styles.ballclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
        </View>
      </View>
      <View style={styles.balls}>
        <View style={[styles.ball, { backgroundColor: "#86837e", marginLeft: 15 }]}></View>
        <View style={[styles.ball, { backgroundColor: "#86837e" }]}></View>
        <View style={[styles.ball, { backgroundColor: "#86837e" }]}></View>
        <View style={[styles.ball, { backgroundColor: "#86837e" }]}></View>
        <View style={styles.clue}>
          <View
            style={[
              styles.ballclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
          <View
            style={[
              styles.ballclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
          <View
            style={[
              styles.ballclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
          <View
            style={[
              styles.ballclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
        </View>
      </View>
      <View style={styles.bottomballs}>
      <View style={[styles.ball, { backgroundColor: "#ff7860" }]}></View>
      <View style={[styles.ball, { backgroundColor: "#9d80fd" }]}></View>
      <View style={[styles.ball, { backgroundColor: "#97e241" }]}></View>
      <View style={[styles.ball, { backgroundColor: "#2ae2ea" }]}></View>
      <View style={[styles.ball, { backgroundColor: "#ed7ee4" }]}></View>
      <View style={[styles.ball, { backgroundColor: "#ffe622" }]}></View>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttontext}>TAMAM</Text>
      </View>
      <View style ={styles.button}>
        <Text style = {styles.buttontext}>TAMAM</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45433f',
    
  },
  header: {
    height: 100,  
    backgroundColor: '#22211f',
    alignItems: 'center',
  },
  headertext: {
    color: '#ffb53c',
    paddingTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    width: "100%",
    height: 70,
    backgroundColor: "#FFB53C",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  buttontext: {
    color : 'black',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  ball: { 
    width: 50,
    height: 50,
    margin: 8,
    borderRadius: 25,
  },
  balls:{
    width: "100%",
    height: 90,
    borderWidth: 1,
    borderBottomColor: "#b1ada5",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  clue: {
    width: 100,
    height: 35,
    margin: 10,
    borderWidth: 1,
    borderColor: "#b1ada5",
    flexDirection: "row",
    alignItems: "center",
  },
  ballclue: {
    width: 16,
    height: 16,
    margin: 4,
    borderRadius: 8,
  },
  bottomballs: {
    width: "100%",
    height: 90,
    borderWidth: 1,
    borderColor: "#b1ada5",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
  },
});
