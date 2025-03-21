import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import InputTodo from "./components/todo/Input.Todo";
import ListTodo from "./components/todo/List.Todo";

export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
    { id: 3, title: "Lorem abc" },
    { id: 4, title: "Lorem abc" },
    { id: 5, title: "Lorem abc" },
    { id: 6, title: "Lorem abc" },
    { id: 7, title: "Lorem abc" },
    { id: 8, title: "Lorem abc" },
    { id: 9, title: "Lorem abc" },
    { id: 10, title: "Lorem abc" },
    { id: 11, title: "Lorem abc" },
    { id: 12, title: "Lorem abc" },
    { id: 13, title: "Lorem abc" },
    { id: 14, title: "Lorem abc" },
    { id: 15, title: "Lorem abc" },
  ]);

  return (
    <View style={styles.container}>
      <InputTodo></InputTodo>
      <ListTodo todoList={todoList} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  text: {
    color: "red",
    fontSize: 20,
  },
});
