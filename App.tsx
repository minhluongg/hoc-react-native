import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Xin chào thế giới!</Text>
      <Text>HeHe</Text>
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 300,
          display: "block",
          borderRadius: 5,
          padding: 10
        }}
        defaultValue="You can type in me ds"></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
