import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import DiaryInput from '../components/DiaryInput';
import { findAll } from '../database/db';
import styles from '../styles/styles';

const CreatepostScreen = () => {

    const [diaries, setDiaries] = useState([])

    useEffect(() => {
        findAll()
            .then(res => console.log("Findall prompt: ", res))
            .catch(err => console.log(err))
    }, [])


    
    return (
        <View style={styles.container}>
            <Pressable style={styles.createaddimage}>
                <Text>Add Image to Post</Text>
            </Pressable>
            <DiaryInput 
            setDiaries={setDiaries}
            />            
        </View>
    )
}

export default CreatepostScreen;