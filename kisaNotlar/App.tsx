import {
  FlatList,
  SafeAreaViewComponent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,

} from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import styles from "./src/styles/Styles";
import Header from "./src/components/Header";
import SearchAndFilter from "./src/components/SearchAndFilter";
import NotesArea from "./src/components/NotesArea";
import FilterArea from "./src/components/FilterArea";
// ! TODO : boş stringleri hiç ekleme ve filtreleme yapma
// ! TODO : Her component için ayrı bir dosya oluştur


export default function App() {
  const [task, setTask] = useState("");
  const [keyword, setKeyword] = useState("");
  const [filterWord, setFilterWord] = useState("");
  const [taskList, setTaskList] = useState([] as string[]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [isSelectZA, setIsSelectZA] = useState(false);
  const [isSelectAZ, setIsSelectAZ] = useState(false);


  const handleAddTask = () => {
    setTaskList([...taskList, task]);
    setTask("");
  };
  const postListFiltered = taskList.filter((task) =>
    task.toLowerCase().includes(filterWord.toLowerCase())
  );
  // desc sorted tasklist function
  const sortByAscending = () => {
    setTaskList([...taskList].sort((a, b) => (a > b ? 1 : -1)));
    console.log(postListFiltered);
    ;
  };
  console.log(taskList);
  const sortByDescending = () => {
    setTaskList([...taskList].sort((a, b) => (a > b ? -1 : 1)));

  };
  const _renderItem = ({ item }: any) =>
    item != "" ? (
      <View style={styles.row}>
        <Text style={styles.item}>{item}</Text>
        <TouchableOpacity
          style={styles.checkBox}
          onPress={() => {
            setTaskList(taskList.filter((task) => task != item));
          }}
        >
          <Text style={styles.filterText}>Sil</Text>
        </TouchableOpacity>
      </View>
    ) : null;

  return (

    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.column}>
        <SearchAndFilter 
        task={task} 
        setTask={setTask} 
        handleAddTask={handleAddTask} 
        filtersVisible={filtersVisible} 
        setFiltersVisible={setFiltersVisible} />
        {filtersVisible && (
          <FilterArea 
          keyword={keyword} 
          setKeyword={setKeyword} 
          sortByAscending={sortByAscending} 
          sortByDescending={sortByDescending} 
          setFilterWord={setFilterWord} 
          isSelectAZ={isSelectAZ} 
          isSelectZA={isSelectZA} 
          setIsSelectAZ={setIsSelectAZ} 
          setIsSelectZA={setIsSelectZA} />
        )}
        <NotesArea 
        postListFiltered={postListFiltered} 
        _renderItem={_renderItem} />
      </View>

      <StatusBar style="auto" />
    </ScrollView>

  );
}


