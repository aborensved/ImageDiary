import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,      
      backgroundColor: '#9b9',
      paddingTop: 20
    },
    containertabs: {
        flex: 1,      
        backgroundColor: '#9b9',
        paddingBottom: 30,
        paddingTop: 20
      },

    // Home Styling
    hometop: {
        backgroundColor: "#11771166",
        width: (Dimensions.get('screen').width * 0.85),
        height: (Dimensions.get('screen').height * 0.08),
        marginVertical: 15,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 15          
    },
    hometoptext: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center'
    },
    homelatestpost: {
        width: (Dimensions.get('screen').width * 0.85),
        height: (Dimensions.get('screen').height * 0.5),
        backgroundColor: '#eeeeee',
        marginBottom: (Dimensions.get('screen').height * 0.1),
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#111',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },
    homelatestimage: {
        width: (Dimensions.get('screen').width * 0.70),
        height: (Dimensions.get('screen').width * 0.70),
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 10,
    },
    homelatestposttext: {
        alignSelf: 'center',
        
    },
    homelatestposttitle: {
        alignSelf: 'center',        
        fontSize: 22,
        color: '#117711',
        fontStyle: "italic"
    },


    // List Entries Styling
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
    listremoveall: {
        width: (Dimensions.get('screen').width),
        backgroundColor: 'red',
        marginTop: 10
    },    
    


    // Create Entry Styling    
    createmoodcontainer: {
        marginBottom: 30,
        backgroundColor: "#11771133",
        width: (Dimensions.get('screen').width * 0.80),
        height: (Dimensions.get('screen').height * 0.28),
        alignSelf: 'center',
        borderRadius: 15,
        padding: 10
    },
    createmoodcontaintertext: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,
    },
    createmooditem: {
        backgroundColor: '#11771177',
        width: (Dimensions.get('screen').width * 0.50),
        alignSelf: "center",
        padding: 15,
        borderRadius: 25,
        marginVertical: 3
    },
    createmoodtext: {
        color: 'white',
        fontSize: 18,
        alignSelf: "center"
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
        //flex: 1,
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
        backgroundColor: "#11771177",
        borderRadius: 25,
        width: (Dimensions.get('screen').width * 0.50),
        height: 50,
        alignSelf: 'center',
        marginBottom: 25,
        flexDirection: 'row',
        
    },
    createbuttontext: {
        color: 'white',
        fontSize: 20,
        marginRight: 5
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
        backgroundColor: '#11771177',
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