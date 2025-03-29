import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface IProps {
  title: string;
  onPress: () => void;
}

const MineButton = (props: IProps) => {
  const { title, onPress } = props;

  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      onPress={onPress}
    >
      <View style={styles.btnAdd}>
        <MaterialCommunityIcons name="plus" size={24} color="white" />
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default MineButton;

const styles = StyleSheet.create({
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  btnAdd: {
    backgroundColor: "#4f46e5",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
    display: "flex",
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    textAlign: "center",
  },
});
