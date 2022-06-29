import { StatusBar } from 'expo-status-bar';
import { NativeAppEventEmitter, Pressable, Text, View } from 'react-native';
import styles from '../styles/styles';
import { AntDesign } from '@expo/vector-icons'
import CreatePostButton from '../components/Createpostbutton';
import LatestPost from '../components/LatestPost';


const HomeScreen = ({navigation}) => {     

    return (
        <View style={styles.container}>
            <Pressable style={styles.hometop}>
                <Text style={styles.hometoptext}>Välkommen till Dagboken</Text>
            </Pressable>
            <View style={styles.homelatestpost}>
                <Text style={styles.homelatestposttext}>Senaste dagboksinlägget: </Text>
                <LatestPost  style={styles.homelatestpost}/>
            </View>
            <View>
                <CreatePostButton 
                    title={'Add new post'}
                    icon={<AntDesign name="plus" size={24} color="white" />}
                    navigation={navigation}                    
                    />
            </View>            
        </View>
    )
}

export default HomeScreen;