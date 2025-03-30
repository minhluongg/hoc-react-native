import { Button, StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  const navigation: any = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <View style={{ marginBottom: 20 }}>
        <Button
          title="Go to Details 1"
          onPress={() => navigation.navigate("Details", { itemId: 1 })}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button
          title="Go to Details 2"
          onPress={() => navigation.navigate("Details", { itemId: 2 })}
        />
      </View>
    </View>
  );
}

function DetailsScreen() {
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const { itemId } = route.params;
  console.log(route);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen {itemId}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          options={({ route }: { route: any }) => ({
            title: `Details ${route.params?.itemId}`,
          })}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
