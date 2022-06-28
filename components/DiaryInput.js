import { useState } from "react";
import { View, TextInput, Pressable, Text, NativeEventEmitter } from "react-native";
import { insert, findAll } from '../database/db'
import ImgDiary from "../models/ImgDiary";
import styles from "../styles/styles";

const DiaryInput = ({ navigation}) => {    

    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');
    //const [imgInput, setImgInput] = useState('');

    const handleTitleChange = (text) => setTitleInput(text)
    const handleBodyChange = (text) => setBodyInput(text)

    const resetInput = () => {
        setTitleInput('');
        setBodyInput('');
    }

    const emitter = new NativeEventEmitter()

    const handleAddPost = () => {
        const imgdiary = new ImgDiary(0, titleInput, bodyInput, 'PLACEHOLDER')
        insert(imgdiary)            
            //.then(res => setListDiaries(res)) 
            .then(res => emitter.emit('knorr'))
            .then(res => resetInput())                       
            .catch(err => {
                const errmsg = err
                console.log(errmsg)
            })
        navigation.navigate('List posts')
         
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                maxLength={20}
                style={styles.createinputtitle} 
                onChangeText={handleTitleChange}
                value={titleInput}
                />
            </View>
            <View>
                <TextInput 
                autoFocus
                multiline
                numberOfLines={12}
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