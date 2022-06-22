import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from '../styles/styles';


const Listposts = ({diaries}) => {

    //TODO : Remove this mockdata!!
    const DATA2 = ["Hej", "Hej igen", "Jag är här", 'Tjohej']

    const renderPosts = ({ item : post }) => {  
        console.log(diaries)      
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
            data={diaries}
            renderItem={renderPosts}
            keyExtractor={(post, index) => index}            
            />
        </View>
    )
}

export default Listposts;