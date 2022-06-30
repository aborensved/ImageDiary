import { useState } from "react";
import { View, ScrollView, KeyboardAvoidingView, TextInput, Pressable, Text, NativeEventEmitter, FlatList, ImageBackground } from "react-native";
import { insert, findAll } from '../database/db'
import ImgDiary from "../models/ImgDiary";
import styles from "../styles/styles";



const DiaryInput = ({ navigation}) => {

    const DATA2 = [
        {
            id: 0,
            title: "Happy",
            ref: 'mood_happy'
        },
        {
            id: 1,
            title: "OK",
            ref: 'mood_middle'
        },
        {
            id: 2,
            title: "Sad",
            ref: 'mood_sad'
        }
    ]

    const renderMood = ({item}) => {
        
        const backgroundColor = item.id === selectedId ? "#117711":"#11771155";        
        
        return (
            <View>
                <Pressable 
                item={item}
                onPress={() => {
                setSelectedId(item.id);
                setImgInput(item.ref);
                }} 
                style={styles.createmooditem}
                backgroundColor={backgroundColor}
                >             
                <Text 
                style={styles.createmoodtext} 
                >"{item.title}"</Text>                
            </Pressable>
            </View>
                
        )
    };



    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');
    const [imgInput, setImgInput] = useState('');
    const [selectedId, setSelectedId] = useState(null);

    const handleTitleChange = (text) => setTitleInput(text)
    const handleBodyChange = (text) => setBodyInput(text)
    

    const resetInput = () => {
        setTitleInput('');
        setBodyInput('');
    }

    const emitter = new NativeEventEmitter()

    const handleAddPost = () => {
        const imgdiary = new ImgDiary(0, titleInput, bodyInput, imgInput)
        insert(imgdiary)
            .then(res => emitter.emit('knorr'))
            .then(res => resetInput())                       
            .catch(err => {
                const errmsg = err
                console.log(errmsg)
            })
        navigation.navigate('List Entries')
         
    }

    

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset = {50}
        style={styles.container}>
            <View style={styles.createmoodcontainer}>
                <Text style={styles.createmoodcontaintertext}>Choose a mood:</Text>
                <FlatList
                data={DATA2}
                renderItem={renderMood}
                keyExtractor={(mood , index) => index}
                extraData={selectedId}
                />                 
            </View>
            <View>
                <TextInput
                placeholder="Title.."
                maxLength={20}
                style={styles.createinputtitle} 
                onChangeText={handleTitleChange}
                value={titleInput}
                />
            </View>
            <View
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TextInput 
                placeholder="Entry text..."
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
                <Text style={styles.createbuttontext}>Add Entry</Text>
            </Pressable>
        </KeyboardAvoidingView>
        
    )

}

export default DiaryInput;