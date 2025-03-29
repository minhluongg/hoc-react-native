import React, { useEffect, useRef, useState } from "react";
import { Alert, Keyboard, StyleSheet, TextInput, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MineButton from "../button/Mine.Button";

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
      <MineButton title="Add new todo" onPress={handleAddNewTodo}></MineButton>
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
