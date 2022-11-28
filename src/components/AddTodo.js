import { useState } from 'react';

import { StyleSheet, View, TextInput, Button, Alert, Keyboard, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const AddTodo = ({addTodo}) => {
   const [title, setTitle] = useState("")

   const pressHandler = () => {
      if(title.trim()){
         addTodo(title)
         setTitle("")
         Keyboard.dismiss()
      }else{
         Alert.alert("Поле не может быть пустое")
      }
   }

   return(
      <View style={styles.block}>
         <TextInput 
            onChangeText={setTitle} 
            style={styles.input}
            value={title}
            placeholder="Введите название задачи"/>
         {/*<AntDesign style={styles.button} onPress={pressHandler} name="pluscircleo" size={30} color="blue" />*/}
         <AntDesign.Button style={styles.button} onPress={pressHandler} name="pluscircleo">
            Добавить
         </AntDesign.Button>
      </View>
   )
}

const styles = StyleSheet.create({
   block: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginVertical: 10
   },
   input: {
      width: "65%",
      padding: 8,
      fontSize: 18,
      textAlign: "center",
      backgroundColor: "#fff",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#000"
   },
   button: {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      padding: 12
   }
});