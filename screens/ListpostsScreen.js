import { StatusBar } from 'expo-status-bar';
import { Text, View , ScrollView} from 'react-native';
import Listposts from '../components/Listposts';
import styles from '../styles/styles';
import { diaries } from '../screens/CreatepostScreen'

// Kolla upp fetch för denna listan! 
// ref: onsdagens lektion


const ListpostsScreen = () => {
    return (
        <View style={styles.container}>            
            <Listposts /> 
        </View>
    )
}

export default ListpostsScreen;