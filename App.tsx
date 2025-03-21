import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState<string>("Minh Luong");
  const [todoList, setTodoList] = useState([
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
      <Text style={styles.text}>Xin chào thế giới!</Text>
      <TextInput
        style={styles.input}
        // autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter your name"
        onChangeText={(val) => setName(val)}
        // defaultValue="You can type in me ds"
      ></TextInput>
      <View>
        <Text>{name}</Text>
      </View>
      <View>
        <Button
          title="Add new"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <ScrollView
        style={{
          borderColor: "pink",
          borderWidth: 1,
          padding: 16,
          borderRadius: 5,
          marginTop: 16,
        }}
      >
        {todoList &&
          todoList.map((todo) => (
            <View key={todo.id} style={styles.todo}>
              <Text>{todo.title}</Text>
            </View>
          ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 16,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    marginTop: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: "red",
    fontSize: 20,
  },
});
