import { View, Text, Image } from 'react-native'
import styles from '../styles/styles'

const Postdetailscreen = ({route, navigation}) => {

    const {post} = route.params

    return (
        <View>
            <Image source={require('../assets/placeholder_img.jpg')} style={styles.detailimage}></Image>
            <Text>Title: {post.title}</Text>
            <Text>Body: {post.body}</Text>
        </View>
    )
}

export default Postdetailscreen;