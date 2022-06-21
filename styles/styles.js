import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listpostcontainer: {
        flex: 1,
        padding: 15,
        backgroundColor: "red",
        
        borderRadius: 15
    },
    listpostitem: {
        flex: 1,   
        padding: 20,     
        backgroundColor: "blue",
        height: "30%"
    },
    listposttitle: {
        color: "white",
        fontSize: 32,
        
    },
    listposttext: {
        color: "white",
        fontSize: 25,
        
    },
  });