import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface IProps {
  addTodo: (title: string) => void;
}

const InputTodo = (props: IProps) => {
  const [name, setName] = useState<string>("");
  const localInputRef = useRef<TextInput>();

  const keyboardDidHideCallback = () => {
    localInputRef?.current?.blur?.();
  };

  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHideCallback
    );

    return () => {
      keyboardDidHideSubscription?.remove();
    };
  }, []);

  const { addTodo } = props;
  const handleAddNewTodo = () => {
    if (!name) {
      Alert.alert("Please enter a todo", "Todo name is required");
      return;
    }
    addTodo(name);
    setName("");
    Alert.alert("Todo added successfully");
  };

  return (
    <View>
      <TextInput
        style={styles.todoInput}
        value={name}
        ref={(ref) => {
          localInputRef && (localInputRef.current = ref as any);
        }}
        autoCorrect={false}
        placeholder="Enter new todo"
        onChangeText={(val) => setName(val)}
      ></TextInput>
      <TouchableOpacity onPress={handleAddNewTodo}>
        <Text style={styles.btnAdd}>Add new todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputTodo;

const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: "#4f46e5",
    color: "#fff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
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
