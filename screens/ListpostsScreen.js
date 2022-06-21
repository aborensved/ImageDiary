import { StatusBar } from 'expo-status-bar';
import { Text, View , ScrollView} from 'react-native';
import Listposts from '../components/Listposts';
import styles from '../styles/styles';


const ListpostsScreen = () => {
    return (
        <View style={styles.container}>            
            <Listposts /> 
        </View>
    )
}

export default ListpostsScreen;