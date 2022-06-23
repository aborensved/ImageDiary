import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from '../styles/styles';


const Listposts = ({listDiaries}) => {

    const renderPosts = ({ item : post }) => {
        return (
            <View  style={styles.listpostitem}>
                <Text style={styles.listposttitle}>TITEL: {post.title}</Text>
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