import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import {TodoScreen} from "./src/screens/TodoScreen"
import { THEME } from './src/theme';

import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from "expo-font"
import AppLoading from 'expo-app-loading';

async function loadApplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [todoId,  setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id: 1, title: "Ты должен устроится на работу!"}
  ])

  if(!isReady){
    return <AppLoading 
      startAsync={loadApplication} 
      onFinish={() => setIsReady(true)}
      onError={err => console.log(err)}
      />
  }

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }
    setTodos(prev => [...prev, newTodo])
  }

  const deleteTodo = (id) => {
    const todo = todos.find(todo => todo.id === id).title
    Alert.alert(
      "Delete todo",
      `Are you sure to delete "${todo}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            setTodoId(null)
            setTodos(todos.filter(item => item.id !== id))
          },
          style: "destructive",
        },
      ],
      {
        cancelable: false,
      }
    );
    
    console.log(id);
  }

  const updateTodo = (title, id) => {
    setTodos(old => old.map(todo => {
      if(todo.id === id){
        todo.title = title
      }
      return todo
    }))
  }

  let content = (
    <MainScreen onOpen={setTodoId} todos={todos} addTodo={addTodo} deleteTodo={deleteTodo}/>
  )

  if(todoId){
    const singleTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen 
                deleteTodo={deleteTodo} 
                todoId={todoId} 
                todo={singleTodo} 
                goBack={() => setTodoId(null)}
                onSave={updateTodo}/>
  }

  return (
    <View style={styles.container}>
      <Navbar title={"React Native"}/>
      <View style={styles.content}>
        { content }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  content: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 10
  }
});
