import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

type ItemProps = { title: string };
const Item = ({ title }: ItemProps) => (
  <View style={styles.todo}>
    <Text>{title}</Text>
  </View>
);

interface IProps {
  todoList: ITodo[];
}

const ListTodo = (props: IProps) => {
  const { todoList } = props;
  return (
    <>
      {" "}
      <FlatList
        style={{
          //   borderColor: "pink",
          //   borderWidth: 1,
          //   padding: 16,
          borderRadius: 5,
          marginTop: 16,
        }}
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item title={item.title} />}
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
  },
});
