import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,      
      backgroundColor: '#aba',    
      
    },

    // Home Styling
    hometop: {
        backgroundColor: "salmon",
        width: (Dimensions.get('screen').width * 0.85),
        height: (Dimensions.get('screen').height * 0.2),
        marginVertical: 15,
        alignSelf: 'center'  
    },
    homelatestpost: {
        width: (Dimensions.get('screen').width * 0.85),
        height: (Dimensions.get('screen').height * 0.4),
        backgroundColor: '#99de99',
        marginBottom: 15,
        alignSelf: 'center'   
    },


    // List posts Styling
    listpostitem: {
        flexDirection: 'row',
        padding: 15,     
        backgroundColor: "#99deaaee",
        marginVertical: 7,
        borderRadius: 15,
        width: (Dimensions.get('screen').width * 0.85),
        alignSelf: 'center'         
    },
    listbutton: {
        flexDirection: 'row',
        width: '100%',
        
    },
    listimage: {
        width: (Dimensions.get('screen').width * 0.20),
        height: (Dimensions.get('screen').width * 0.20),
        borderRadius: 10,
    },
    listimageview: {
        justifyContent: 'center',
        color: "white",
        fontSize: 25,
    }, 
    listposttitle: {
        color: "white",
        fontSize: 25,
    },
    listtitleview: {
        marginLeft: 10,        
        justifyContent: 'center',
        color: "white",
        fontSize: 25,
    },    
    


    // Create post Styling
    createaddimage: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRadius: 15,
        width: (Dimensions.get('screen').width * 0.70),
        height: (Dimensions.get('screen').height * 0.3),
        marginVertical: 20,
        alignSelf: 'center' 
    },
    createinputtitle: {
        backgroundColor: "white",
        borderRadius: 15,
        width: (Dimensions.get('screen').width * 0.80),
        height: 50,
        marginBottom: 15,
        padding: 10,
        fontSize: 20,
        alignSelf: 'center' 
    },
    createinputbody: {
        flex: 1,
        textAlignVertical: "top",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 15,
        width: (Dimensions.get('screen').width * 0.80),
        height: (Dimensions.get('screen').height * 0.30),
        marginBottom: 15,
        fontSize: 16,
        alignSelf: 'center' 
    },
    createbutton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRadius: 15,
        width: (Dimensions.get('screen').width * 0.50),
        height: 50,
        alignSelf: 'center',
        marginBottom: 25
    },

    // PostdetailScreen styling    
    detailimage: {
        width: (Dimensions.get('screen').width),
        height: (Dimensions.get('screen').width),
    },
    detailtitleview: {        
        width: (Dimensions.get('screen').width),
        backgroundColor: '#11111188',
        borderBottomWidth: 2,
        borderBottomColor: 'salmon',
    },
    detailtitle: {
        alignSelf: 'center',
        fontSize: 22,
        padding: 10,
        textShadowColor: '#111111ff',
        textShadowOffset: { width: 0, height: 3},
        textShadowRadius: 10,
        color: 'white'
    },
    detailbodyview: {        
        width: (Dimensions.get('screen').width),
        marginBottom: 10,
    },
    detailbody: {
        padding: 10,
        fontSize: 16,
    },
    detailbutton: {
        width: (Dimensions.get('screen').width * .8),
        alignSelf: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        marginBottom: 15  
    },
    detaildeletebutton: {
        width: (Dimensions.get('screen').width * .8),        
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'red',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 15        
    },
    detaildeletetext: {
        color: '#fff'
    }
    
  });