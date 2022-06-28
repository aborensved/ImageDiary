import {view, Pressable, Text} from 'react-native';
import styles from '../styles/styles';

const CreatePostButton = ({title, icon, navigation}) => {
    return (
    <Pressable
        onPress={() => navigation.navigate('Create post')}
        style={styles.createbutton}
    >
        <Text style={styles.createbuttontext}>{title}</Text>
            {icon}                 
        </Pressable>
    )
}

export default CreatePostButton;