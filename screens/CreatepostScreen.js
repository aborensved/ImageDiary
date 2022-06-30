import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import DiaryInput from '../components/DiaryInput';
import DiaryInputRedux from '../components/DiaryInputRedux';
import styles from '../styles/styles';



const CreatepostScreen = ({navigation}) => {

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>            
            <DiaryInputRedux             
            navigation={navigation}
            />            
        </KeyboardAvoidingView>
    )
    
}

export default CreatepostScreen;