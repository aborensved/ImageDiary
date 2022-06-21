import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,      
      backgroundColor: '#aba',
      alignItems: 'center',
      padding: 15,    
      
    },

    // Home Styling
    hometop: {
        backgroundColor: "salmon",
        width: (Dimensions.get('screen').width * 0.85),
        height: (Dimensions.get('screen').height * 0.2),
        marginBottom: 15,  
    },
    homelatestpost: {
        width: (Dimensions.get('screen').width * 0.85),
        height: (Dimensions.get('screen').height * 0.4),
        backgroundColor: '#99de99',
        marginBottom: 15,  
    },


    // List posts Styling
    listpostitem: {
        padding: 15,     
        backgroundColor: "#99de99",
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: (Dimensions.get('screen').width * 0.85)        
    },
    listposttitle: {
        color: "white",
        fontSize: 25,
    },
    listposttext: {
        color: "grey",
        fontSize: 15,        
    },

    // Create post Styling
    createaddimage: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRadius: 15,
        width: (Dimensions.get('screen').width * 0.70),
        height: (Dimensions.get('screen').height * 0.3),
        marginBottom: 25
    },
    createinputtitle: {
        backgroundColor: "white",
        borderRadius: 15,
        width: (Dimensions.get('screen').width * 0.80),
        height: 50,
        marginBottom: 15,
        padding: 10,
        fontSize: 20
    },
    createinputbody: {
        backgroundColor: "white",
        borderRadius: 15,
        width: (Dimensions.get('screen').width * 0.80),
        height: 200,
        marginBottom: 15,
        padding: 10,
        fontSize: 16,
    },
    createbutton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRadius: 15,
        width: (Dimensions.get('screen').width * 0.50),
        height: 50 
    },
    
  });