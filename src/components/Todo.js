import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { AppTextBold } from './ui/AppTextBold';

export const Todo = ({todo, deleteTodo, onOpen}) => {
   return(
      <TouchableOpacity 
         onLongPress={() => deleteTodo(todo.id)}
         onPress={() => onOpen(todo.id)}
         style={styles.wrapper}>
         <View style={styles.todo}>
            <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   todo: {
      width: "90%",
      padding: 10,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: 5,
      marginBottom: 10,
      backgroundColor: "white",
   },
   title: {
      fontSize: 20,
   },
   wrapper: {
      alignItems: "center",
   }
});