import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import TodoList from './TodoList'

function App() {


  return (
 <View style={{ alignItems: "center", flex:1, top:50 }}>
<TodoList />
 </View>

  );
}

export default App;
const styles = StyleSheet.create({
deleteText:{
  backgroundColor: "pink",
  height: 30,
  borderRadius: 5,
  width: 80,
  marginRight: 10,
  top: 10
}


})