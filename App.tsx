import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState<string>("Minh Luong");
  const [age, setAge] = useState<number>(0);
  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({ name: "Minh Luong", age: 0 });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Xin chào thế giới!</Text>
      <View>
        <Text>{name}</Text>
      </View>
      <View>
        <Text>{age}</Text>
      </View>
      <View>
        <Text>{JSON.stringify(person)}</Text>
      </View>
      <TextInput
        style={styles.input}
        defaultValue="You can type in me ds"
      ></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    borderRadius: 5,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 54,
    paddingHorizontal: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: "red",
    fontSize: 20,
  },
});
