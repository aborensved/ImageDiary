import { View, Text, Image } from 'react-native'

const Postdetailscreen = ({route, navigation}) => {

    const {post} = route.params

    return (
        <View>
            <Image source={require('../assets/placeholder_img.jpg')}></Image>
            <Text>Title: {post.title}</Text>
            <Text>Body: {post.body}</Text>
        </View>
    )
}

export default Postdetailscreen;