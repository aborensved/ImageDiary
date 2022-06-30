import {View, Text, ScrollView, FlatList, Pressable, Image} from 'react-native';
import styles from '../styles/styles';
import Images from '../assets';


const Listposts = ({listDiaries, navigation}) => {

    const handlePress = (post) => {
        navigation.navigate('PostdetailScreen', {post: post})
    }

    const renderPosts = ({ item: post }) => {
        var imgsource = Images.placeholder        
        switch (post.imgdata) {
            case 'mood_happy': imgsource = Images.imagehappy
                break;
            case 'mood_middle' : imgsource = Images.imagemiddle
                break;
            case 'mood_sad' : imgsource = Images.imagesad
                break;
            default: console.log('ListPosts: No image reference was found')
        }            
        
        return (
            <ScrollView style={styles.listpostitem}>                
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
            </ScrollView>
        )        
    }

    return (
        <View>
            <FlatList 
            inverted
            data={listDiaries}
            renderItem={renderPosts}
            keyExtractor={(post, index) => index}            
            />
            
        </View>
        
    )
}

export default Listposts;