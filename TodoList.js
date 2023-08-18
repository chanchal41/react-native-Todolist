import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
const COLORS = {primary: '#1f145c', white: '#fff'};
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editInput, setEditInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodos = {
      id: new Date().getTime(),
      text: input,
    };
    setTodos([...todos].concat(newTodos));
   console.log(newTodos)
  };

  function handleDelete(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log(updatedTodos)
  }

  function saveEdit(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editInput;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditInput("");
    setEditTodo(null);
    console.log(updatedTodos);
  }

  return (
    <View style={styles.Container}>
      <View style={styles.ViewText}>
        <TextInput
          onChangeText={(text) => setInput(text)}
          style={styles.inputText}
        />
        <View style={{}}>
          <TouchableOpacity style={{}} onPress={handleSubmit}>
            <View style={styles.iconContainer}>
              <Icon name="add" color="white" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {todos.map((todo) => (
        <View key={todo.id}>
          {editTodo === todo.id ? (
            <View>
              <TextInput
                onChangeText={(text) => setEditInput(text)}
                style={styles.editText}
              />
            </View>
          ) : (
            <Text style={styles.text}>{todo.text}</Text>
          )}
          <View style={styles.viewText2}>
            <TouchableOpacity
              style={styles.deleteText}
              onPress={() => handleDelete(todo.id)}
            >
              <View style={styles.actionIcon}>
                <Icon name="delete" size={20} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEditTodo(todo.id)}>
              <View style={styles.actionIcon}>
                <Icon name="edit" size={20} color="white" />
              </View>
            </TouchableOpacity>
            {editTodo ? (
              <TouchableOpacity onPress={() => saveEdit(todo.id)}>
                <View style={styles.actionIcon}>
                  <Icon name="save" size={20} color="white" />
                </View>
              </TouchableOpacity>
            ) : (
              <Text></Text>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    elevation: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  
  },

  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginLeft: 5,
    borderRadius: 3,
    marginTop: 25,
  },
  inputText: {
    height: 35,
    borderWidth: 2,
    borderRadius: 5,
    width: 121,
    marginTop: 7,
    marginRight: 10,
    borderColor: "gray",
    top: 10,
  },
  editText: {
    height: 35,
    borderWidth: 2,
    borderRadius: 5,
    width: 121,
    marginTop: 7,
    marginRight: 10,
    borderColor: "gray",
    top: 10,
  },
  Container: {
    left: 100,
    top: 35,
  },
  ViewText: {
    flexDirection: "row",
  },
  text: { top: 10 },
  viewText2: { flexDirection: "row" },
});

export default App;