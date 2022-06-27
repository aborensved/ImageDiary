import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View , ScrollView, NativeEventEmitter} from 'react-native';
import Listposts from '../components/Listposts';
import styles from '../styles/styles';
import { findAll } from '../database/db';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Postdetailscreen from './PostdetailScreen';
import { NavigationContainer } from '@react-navigation/native';


// Kolla upp fetch för denna listan! 
// ref: onsdagens lektion
// Fetch avser HTTP anrop, vilket vi inte ska använda, då vi har en lokal databas.

// Vi ska få in en en useState in hit som vi skickar in i ListPosts
// Vi gör en hämtnign från DB som skickar dem vidare från skärmen och listar dem.


const ListpostsScreen = ({navigation}) => {
    const RootStack = createNativeStackNavigator();

    const [listDiaries, setListDiaries] = useState([])

    const emitter = new NativeEventEmitter()

    const updateListener = emitter.addListener('knorr', () => {
        findAll()
            .then(res => setListDiaries(res))
            .catch(err => {
                const errmsg = err
                console.log(errmsg)}
                )
    })  

    useEffect(() => {
        findAll()
            .then(res => setListDiaries(res))
            .catch(err => {
                const errmsg = err
                console.log(errmsg)}
                )
        return () => updateListener.remove()     
    }, [])

    const ListView = ({navigation}) => {
        return (
            <View style={styles.container}>            
            <Listposts
            listDiaries={listDiaries} 
            setListDiaries={setListDiaries}
            navigation={navigation}
            />
        </View> 
        )
    }

    return (
    
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name='ListView' component={ListView} options={{headerShown: false}}  />         
                </RootStack.Group>
            <RootStack.Group screenOptions={ { presentation: 'modal'} }>
                <RootStack.Screen name="PostdetailScreen" component={Postdetailscreen}>
                
        
                </RootStack.Screen>
            </RootStack.Group>
            </RootStack.Navigator>
       
        
    )
}

export default ListpostsScreen;