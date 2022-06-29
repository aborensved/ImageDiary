import { Text, View } from 'react-native';
import styles from '../styles/styles';
import { AntDesign } from '@expo/vector-icons'
import CreatePostButton from '../components/Createpostbutton';
import LatestPost from '../components/LatestPost';


const HomeScreen = ({navigation}) => {     

    return (
        <View style={styles.container}>
            <View style={styles.hometop}>
                <Text style={styles.hometoptext}>Welcome to your Diary</Text>
            </View>
            <View style={styles.homelatestpost}>
                <Text style={styles.homelatestposttext}>Latest diary entry: </Text>
                <LatestPost navigation={navigation} style={styles.homelatestpost}/>
            </View>
            <View>
                <CreatePostButton 
                    title={'Add New Entry'}
                    icon={<AntDesign name="plus" size={24} color="white" />}
                    navigation={navigation}                    
                    />
            </View>            
        </View>
    )
}

export default HomeScreen;