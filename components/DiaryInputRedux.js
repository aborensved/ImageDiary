import { useState } from "react";
import { View, ScrollView, KeyboardAvoidingView, TextInput, Pressable, Text, NativeEventEmitter, FlatList, ImageBackground } from "react-native";
import { insert, findAll } from '../database/db'
import ImgDiary from "../models/ImgDiary";
import styles from "../styles/styles";


// TODO: Skriva om mood utan Flatlist, då det ställer till det med felmeddelande. 
// Tog bort autofocus på entry text, då det inte gjorde vad vi trodde ;)
// Good luck!


const DiaryInputRedux = ({ navigation}) => {

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
            <View >
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

    // Skriv en funktion med knappar som är hårdkodade för beteende. Kör med ScrollView sen. 
    // Fuck React Native

    

    return (
        <View style={styles.container}>
            <View
            nativeID="moodbox"
            style={styles.createmoodcontainer}>
                <Text style={styles.createmoodcontaintertext}>Choose a mood:</Text>
                <FlatList
                data={DATA2}
                renderItem={renderMood}
                keyExtractor={(mood , index) => index}
                extraData={selectedId}
                />                 
            </View>
            <ScrollView>
            <View>
                <TextInput
                placeholder="Title.."
                maxLength={20}
                style={styles.createinputtitle} 
                onChangeText={handleTitleChange}
                value={titleInput}
                />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}                
                >
                <TextInput 
                placeholder="Entry text..."
                multiline
                numberOfLines={12}
                style={styles.createinputbody}
                onChangeText={handleBodyChange}
                value={bodyInput}
                />
            </KeyboardAvoidingView>
            <Pressable
            style={styles.createbutton}
            onPress={handleAddPost}
            navigation={navigation}
            >
                <Text style={styles.createbuttontext}>Add Entry</Text>
            </Pressable>
            </ScrollView>
        </View>
        
    )

}

export default DiaryInputRedux;