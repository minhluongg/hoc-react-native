import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputTodo from "./components/todo/Input.Todo";
import ListTodo from "./components/todo/List.Todo";

export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      id: randomInteger(1, 1000000),
      title,
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <InputTodo addTodo={addTodo}></InputTodo>
        <ListTodo todoList={todoList} deleteTodo={deleteTodo} />

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
