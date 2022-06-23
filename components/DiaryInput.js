import { useState } from "react";
import { View, TextInput, Pressable, Text, NativeEventEmitter } from "react-native";
import { insert, findAll } from '../database/db'
import ImgDiary from "../models/ImgDiary";
import styles from "../styles/styles";
import { setListDiaries } from '../screens/ListpostsScreen'


const DiaryInput = ({navigation}) => {
    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');
    //const [imgInput, setImgInput] = useState('');

    const handleTitleChange = (text) => setTitleInput(text)
    const handleBodyChange = (text) => setBodyInput(text)

    const emitter = new NativeEventEmitter()

    const handleAddPost = () => {
        const imgdiary = new ImgDiary(0, titleInput, bodyInput, 'PLACEHOLDER')
        insert(imgdiary)
            .then(res => {
                console.log(res)
            })
            .then(res => emitter.emit('update', res))
            .then(res => setListDiaries(res))            
            .catch(err => console.log(err))
        navigation.navigate('List posts')
         
    }

    return (
        <View>
            <View>
                <TextInput
                style={styles.createinputtitle} 
                onChangeText={handleTitleChange}
                value={titleInput}
                />
            </View>
            <View>
                <TextInput 
                style={styles.createinputbody}
                onChangeText={handleBodyChange}
                value={bodyInput}
                />
            </View>
            <Pressable
            style={styles.createbutton}
            onPress={handleAddPost}
            navigation={navigation}
            >
                <Text>Add post</Text>
            </Pressable>
        </View>
        
    )

}

export default DiaryInput;