import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable } from 'react-native';
import styles from '../styles/styles';

const CreatepostScreen = () => {
    
    return (
        <View style={styles.container}>
            <Pressable style={styles.createaddimage}>
                <Text>Add Image to Post</Text>
            </Pressable>
            <TextInput value='title...' style={styles.createinputtitle}></TextInput>
            <TextInput value='body...' style={styles.createinputbody}></TextInput>
            <Pressable style={styles.createbutton}>
                <Text>Add Post</Text>
            </Pressable>            
        </View>
    )
}

export default CreatepostScreen;