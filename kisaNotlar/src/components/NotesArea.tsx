import React from 'react';  
import { View, Text,FlatList } from 'react-native';
import styles  from '../styles/Styles';
import { Metrics } from '../../Metrics';
const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View
        style={{
          height: Metrics.measure(1),
          marginLeft: Metrics.measure(15),
          marginRight: Metrics.measure(15),
          backgroundColor: "black",
        }}
      />
    );
  };
type notesAreaProps = {
    postListFiltered: string[],
    _renderItem: ({ item }: any) => JSX.Element | null,
  };
  const NotesArea = (props: notesAreaProps) => {
    const { postListFiltered, _renderItem } = props;
    return (
      <View>
        <View style={styles.divider}></View>
        <Text style={styles.notesText}>Notlar</Text>
        <FlatList
          data={postListFiltered}
          renderItem={_renderItem}
          keyExtractor={(item) => item + Math.random() + Date.now()} // ! TODO : unique key
          ItemSeparatorComponent={ItemSeparatorView}
          scrollEnabled={true}
        />
      </View>
    );
  };
  export default NotesArea;
  