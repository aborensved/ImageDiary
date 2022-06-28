import {View, Text, FlatList, SafeAreaView, Pressable, Image} from 'react-native';
import styles from '../styles/styles';
import Images from '../assets';


const Listposts = ({listDiaries, navigation}) => {

    const handlePress = (post) => {
        navigation.navigate('PostdetailScreen', {post: post})
    }

    // text cutoff
    // bild på en plats, text anpassar sig efter sidan.

    const renderPosts = ({ item: post }) => {
        var imgsource = Images.placeholder        
        switch (post.imgdata) {
            case 'mood_happy': imgsource = Images.imagehappy
                break;
            case 'mood_middle' : imgsource = Images.imagemiddle
                break;
            case 'mood_sad' : imgsource = Images.imagesad
                break;
            default: console.log('No image data was found')
        }            
        
        return (
            <View style={styles.listpostitem}>                
                <Pressable 
                    onPress={() => handlePress(post)} 
                    post={post} 
                    style={styles.listbutton}>
                    <View style={styles.listimageview}>
                        <Image 
                            source={imgsource} 
                            style={styles.listimage} 
                        />
                    </View>
                    <View style={styles.listtitleview}>
                        <Text 
                            style={styles.listposttitle}>{post.title}
                        </Text>
                    </View>                    
                </Pressable>                
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