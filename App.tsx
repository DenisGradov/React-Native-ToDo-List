import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useTodoList } from "./states/useTodoList";
import { useEffect } from "react";

export default function App() {
  const toDoList = useTodoList();
  return (
    <View style={styles.container}>
      <Text>Todo List by Stenford</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
