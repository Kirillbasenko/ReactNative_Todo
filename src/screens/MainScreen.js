import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import { THEME } from '../theme';
import { useState } from 'react';
import { useEffect } from 'react';

export const MainScreen = ({todos, addTodo, deleteTodo, onOpen}) => {
   const [deviceWidth, setDeviceWidth] = useState(
      Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
   )

   useEffect(() => {
      const update = () => {
         const width = Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
         setDeviceWidth(width)
      }
      Dimensions.addEventListener("change", update)
      return () => {
         Dimensions.removeEventListener("change", update)
      } 
      
   }, [])

   let content = (
      <View style={{width: deviceWidth}}>
         <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => {
               return <Todo onOpen={onOpen} deleteTodo={deleteTodo} todo={item} key={item.id}/>
            }}/>
      </View>
         )

   if(todos.length === 0){
      content = (
      <View style={styles.imageWrap}>
         <Image resizeMode='contain' style={styles.image} source={require("../../assets/no-items.png")}/>
      </View>)
   }

   return(
      <View>
         <AddTodo addTodo={addTodo}/>
         {content}
      </View>
   )
}

const styles = StyleSheet.create({
   imageWrap: {
      marginTop: "10%",
      alignItems: "center",
      justifyContent: "center",
      height: 350,
   },
   image: {
      width: "100%",
      height: "100%"
   }
});