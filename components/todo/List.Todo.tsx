import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface IProps {
  todoList: ITodo[];
  deleteTodo: (id: number) => void;
}

const ListTodo = (props: IProps) => {
  const { todoList } = props;
  const { deleteTodo } = props;
  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
    console.log(">> handleDeleteTodo >> id", id);
  };
  console.log(todoList);
  return (
    <>
      {" "}
      <FlatList
        style={{
          borderColor: "pink",
          borderWidth: 1,
          //   padding: 16,
          borderRadius: 5,
          marginTop: 16,
        }}
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.todo}>
              <Text>{item.title}</Text>
              <TouchableOpacity
                style={styles.close}
                onPress={() => handleDeleteTodo(item.id)}
              >
                <Text style={styles.closeText}>X</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </>
  );
};

export default ListTodo;

const styles = StyleSheet.create({
  todo: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 16,
    fontSize: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  close: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});
