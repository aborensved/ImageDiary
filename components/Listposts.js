import {View, Text, FlatList, SafeAreaView, Pressable, Image} from 'react-native';
import styles from '../styles/styles';


const Listposts = ({listDiaries, navigation}) => {

    const handlePress = (post) => {
        navigation.navigate('PostdetailScreen', {post: post})
    }

    const renderPosts = ({ item: post }) => {
        return (
            <View  style={styles.listpostitem}>
                <Image source={require('../assets/placeholder_img.jpg')} style={styles.listimage} />
                <Pressable onPress={() => handlePress(post)} post={post}>
                    <Text style={styles.listposttitle}>TITEL: {post.title}</Text>
                </Pressable>
                <Text style={styles.listposttext}>BODY: {post.body}</Text>
            </View>
        )        
    }

    return (
        <View>
            <FlatList 
            data={listDiaries}
            renderItem={renderPosts}
            keyExtractor={(post, index) => index}            
            />
        </View>
    )
}

export default Listposts;