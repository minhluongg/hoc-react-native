import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

const InputTodo = () => {
  const [name, setName] = useState<string>("");
  return (
    <View>
      <TextInput
        style={styles.todoInput}
        value={name}
        autoCorrect={false}
        placeholder="Enter new todo"
        onChangeText={(val) => setName(val)}
      ></TextInput>
      <Button
        title="Add new todo"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
};

export default InputTodo;

const styles = StyleSheet.create({
  todoInput: {
    // height: 40,
    borderColor: "#d1d5db",
    color: "#020203",
    borderWidth: 1,
    width: "100%",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    marginTop: 16,
  },
});
