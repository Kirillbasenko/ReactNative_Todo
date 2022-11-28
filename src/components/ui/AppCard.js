import { StyleSheet, View } from 'react-native';

export const AppCard = (props) => {
   return(
      <View style={{...styles.default, ...props.style}}>
         {props.children}
      </View>
   )
}

const styles = StyleSheet.create({
   default: {
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowRadius: 2,
      shadowOpacity: 0.3,
      elevation: 8,
      shadowOffset: {width: 5, height: 5},
      backgroundColor: "#fff",
      borderRadius: 10
   }
});