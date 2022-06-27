import { NativeEventEmitter, View, Text, Image, Pressable, ScrollView } from 'react-native'
import styles from '../styles/styles'
import { deleteByID } from "../database/db";

const Postdetailscreen = ({route, navigation}) => {

    const {post} = route.params

    const emitter = new NativeEventEmitter()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleDelete = (id) => {
        deleteByID(id)
            .then(res => emitter.emit('delete', post))

        navigation.goBack()
    }


    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/placeholder_img.jpg')} style={styles.detailimage}></Image>
            <View style={styles.detailtitleview}>
                <Text style={styles.detailtitle}>{post.title}</Text>  
            </View>
            <View  style={styles.detailbodyview}>
                <Text style={styles.detailbody}>Body: {post.body}</Text>
            </View>
            <Pressable onPress={() => handleGoBack()} style={styles.detailbutton}>
                <Text>Go Back</Text>
            </Pressable>
            <Pressable onPress={() => handleDelete(post.id)} style={styles.detaildeletebutton}>
                <Text style={styles.detaildeletetext}>Delete Post</Text>
            </Pressable>
        </ScrollView>
    )
}

export default Postdetailscreen;