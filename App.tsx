import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTodoList } from "./states/useTodoList";
import { useEffect } from "react";
import { useInput } from "./states/useInput";

export default function App() {
  const toDoList = useTodoList();
  const input = useInput();
  const handleUpdateInput = (text: string) => input.change(text);
  const handleAddTodo = () => {
    if (toDoList.list.includes(input.text)) {
      input.change("");
      return;
    }
    toDoList.add(input.text);
    input.change("");
  };
  const handleDeleateTodo = (todo: string) => {
    console.log(todo);
    toDoList.dell(todo);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerText}>Todo List by Stenford</Text>
      <View style={styles.containerForInputTools}>
        <TextInput
          style={styles.containerInput}
          placeholder="Введите ToDo"
          value={input.text}
          onChangeText={handleUpdateInput}
          onSubmitEditing={handleAddTodo}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Добавить</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todoItemBlock}>
        {toDoList.list.map((todo, todoIndex) => {
          return (
            <Text
              style={styles.todoItem}
              onPress={() => {
                handleDeleateTodo(todo);
              }}
              key={todo}
            >
              {todoIndex + 1}
              {")"} {todo}
            </Text>
          );
        })}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  containerForInputTools: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  containerInput: {
    borderWidth: 1,
    padding: 5,
    width: 200,
    borderRadius: 5,
    marginRight: 5,
  },
  button: {
    marginLeft: 5,
    borderWidth: 1,
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  todoItemBlock: {
    width: "78.5%",
    position: "absolute",
    left: 43,
    top: 100,
  },
  todoItem: {
    padding: 5,
    margin: 5,
    marginLeft: 0,
    width: "100%",
    borderWidth: 1,
    backgroundColor: "grey",
  },
});
