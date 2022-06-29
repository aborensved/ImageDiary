import { NativeEventEmitter, View, Text, Image, Pressable, ScrollView } from 'react-native'
import styles from '../styles/styles'
import { deleteByID } from "../database/db";
import Images from '../assets/index';

const Postdetailscreen = ({route, navigation}) => {

    const {post} = route.params

    const emitter = new NativeEventEmitter()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleDelete = (id) => {
        deleteByID(id)
            .then(res => emitter.emit('delete', post))
            .catch(err => console.log(err))

        navigation.goBack()
    }
    
    const renderImage = () => {
        var imgsource = Images.placeholder        
        switch (post.imgdata) {
            case 'mood_happy': imgsource = Images.imagehappy
                break;
            case 'mood_middle' : imgsource = Images.imagemiddle
                break;
            case 'mood_sad' : imgsource = Images.imagesad
                break;
            default: console.log('PostDetailScreen: No image reference was found')
        }
        return imgsource       
    }
    


    return (
        <ScrollView style={styles.containertabs}>
            <Image source={renderImage()} style={styles.detailimage}></Image>
            <View style={styles.detailtitleview}>
                <Text style={styles.detailtitle}>{post.title}</Text>  
            </View>
            <View  style={styles.detailbodyview}>
                <Text style={styles.detailbody}>{post.body}</Text>
            </View>
            <Pressable onPress={() => handleGoBack()} style={styles.detailbutton}>
                <Text style={{color: '#131', fontSize: 16, fontWeight: 'bold'}}>Go Back</Text>
            </Pressable>
            <Pressable onPress={() => handleDelete(post.id)} style={styles.detaildeletebutton}>
                <Text style={styles.detaildeletetext}>Delete This Entry</Text>
            </Pressable>
        </ScrollView>
    )
}

export default Postdetailscreen;