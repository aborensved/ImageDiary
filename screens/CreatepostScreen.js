import { View, ScrollView } from 'react-native';
import DiaryInput from '../components/DiaryInput';
import styles from '../styles/styles';



const CreatepostScreen = ({navigation}) => {

    return (
        <View style={styles.container}>            
            <DiaryInput             
            navigation={navigation}
            />            
        </View>
    )
    
}

export default CreatepostScreen;