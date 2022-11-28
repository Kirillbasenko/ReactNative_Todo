import { StyleSheet, View, Button, Text } from 'react-native';
import { useState } from 'react';
import {FontAwesome, AntDesign} from "@expo/vector-icons"

import { AppCard } from '../components/ui/AppCard';
import {THEME} from "../theme"
import { EditModal } from '../components/EditModal';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppButton } from '../components/ui/AppButton';

export const TodoScreen = ({ todo, goBack, deleteTodo, onSave }) => {
   const [modal, setModal] = useState(false)

   const saveHandler = (title) => {
      onSave(title, todo.id)
      setModal(false)
   }

   return(
      <View style={styles.content}>
         <EditModal 
            value={todo.title} 
            todo={todo} 
            visible={modal} 
            modal={() => setModal(false)}
            onSave={saveHandler}/>
         <AppCard style={styles.card}>
            <AppTextBold style={styles.text}>{todo.title}</AppTextBold>
            <View style={styles.button}>
               <AppButton color={THEME.MAIN_COLOR} onPress={() => setModal(true)}>
                  <FontAwesome name='edit' size={20}/>
               </AppButton>
            </View>
         </AppCard>
         <View style={styles.buttons}>
            <View style={styles.button}>
               <AppButton color={THEME.GREY_COLOR} onPress={() => goBack()}>
                  <AntDesign name='back' size={20} />
               </AppButton>
            </View>
            <View style={styles.button}>
               <AppButton onPress={() => deleteTodo(todo.id)} color={THEME.DANGER_COLOR}>
                  <FontAwesome name='remove' size={20}/>
               </AppButton>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   content: {
      
   },
   buttons: {
      flexDirection: "row",
      justifyContent: "space-around"
   },
   button: {
      width: "35%",
   },
   card: {
      marginBottom: 20
   },
   text: {
      textAlign: "center",
      fontSize: 20,
      marginBottom: 15
   }
});