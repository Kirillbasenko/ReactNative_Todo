import { StyleSheet, View, Platform } from 'react-native';
import { AppText } from './ui/AppText';
import { THEME } from '../theme';

export const Navbar = ({title}) => {
   return(
      <View style={{...styles.navBar, ...Platform.select({
         ios: styles.navbarIos,
         android: styles.navbarAndroid
      })}}>
         <AppText style={styles.text}>
            {title}
         </AppText>
      </View>
      
   )
}

const styles = StyleSheet.create({
   navBar: {
      height: 45,
      
      justifyContent: "flex-end",
   },
   navbarAndroid: {
      backgroundColor: THEME.MAIN_COLOR,
   },
   navbarIos: {
      borderBottomColor: THEME.MAIN_COLOR,
      borderBottomWidth: 1
   },
   text: {
      textAlign: "center",
      fontSize: 20,
      color: "#fff",
      paddingVertical: 2,
   }
});