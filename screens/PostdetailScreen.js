import { View, Text, Image, Pressable } from 'react-native'
import styles from '../styles/styles'

const Postdetailscreen = ({route, navigation}) => {

    const {post} = route.params

    return (
        <View>
            <Image source={require('../assets/placeholder_img.jpg')} style={styles.detailimage}></Image>
            <Text>Title: {post.title}</Text>
            <Text>Body: {post.body}</Text>
            <Pressable style={styles.detailbutton}>
                <Text>Go Back</Text>
            </Pressable>
            <Pressable style={styles.detaildeletebutton}>
                <Text style={styles.detaildeletetext}>Delete Post</Text>
            </Pressable>
        </View>
    )
}

export default Postdetailscreen;