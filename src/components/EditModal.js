import { StyleSheet, View, TextInput, Button, Modal, Alert } from 'react-native';
import {THEME} from "../theme"
import { useState } from 'react';
import { AppButton } from './ui/AppButton';

export const EditModal = ({visible, modal, value, onSave}) => {
   const [text, setText] = useState(value)

   const saveHandler = () => {
      if(text.trim().length < 3){
         Alert.alert("Error","Minimum length 3 words")
      }else{
         onSave(text)
      }
   }

   return(
      <Modal visible={visible} animationType="slide">
         <View style={styles.wrap}>
            <TextInput 
               style={styles.input} 
               placeholder="Введите название"
               value={text}
               onChangeText={setText}/>
            <View style={styles.buttons}>
               <View style={styles.button}>
                  <AppButton color={THEME.DANGER_COLOR} onPress={modal}>
                     Cancel
                  </AppButton>
               </View>
               <View style={styles.button}>
                  <AppButton color={THEME.MAIN_COLOR} onPress={() => saveHandler()} title='Save'>
                     Save
                  </AppButton>
               </View>
            </View>
         </View>
      </Modal>
   )
}

const styles = StyleSheet.create({
   wrap: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   },
   buttons: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20
   },
   input: {
      width: "80%",
      padding: 10,
      fontSize: 18,
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#000"
   },
   button: {
      width: "30%"
   }
});