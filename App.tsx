import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState<string>("Minh Luong");

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
    marginBottom: 16,
    marginTop: 16,
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
