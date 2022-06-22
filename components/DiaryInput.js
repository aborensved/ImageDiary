import { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import { insert } from '../database/db'
import ImgDiary from "../models/ImgDiary";
import styles from "../styles/styles";


const DiaryInput = ({setDiaries}) => {
    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');
    //const [imgInput, setImgInput] = useState('');

    const handleTitleChange = (text) => setTitleInput(text)
    const handleBodyChange = (text) => setBodyInput(text)

    const handleAddPost = () => {
        const imgdiary = new ImgDiary(0, titleInput, bodyInput, 'PLACEHOLDER')
        insert(imgdiary)
            .then(res => console.log(res))
            .then(res => setDiaries(res))
            .catch(err => console.log(err)) 
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
            >
                <Text>Add post</Text>
            </Pressable>
        </View>
        
    )

}

export default DiaryInput;