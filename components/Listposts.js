import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from '../styles/styles';

const Listposts = () => {

    const DATA = [
        {
            id: 1,
            title: "Hello World",
            body: "Today is the first day of summer",
            imagedata: "This is a link"
        },
        {
            id: 2,
            title: "Hello Sweden",
            body: "Today I ate a sandwich",
            imagedata: "This is a link also"
        }
    ]

    const DATA2 = ["Hej", "Hej igen", "Jag är här", 'Tjohej']

    const renderPosts = ({ item : post }) => {        
        return (
            <View  style={styles.listpostitem}>
                <Text style={styles.listposttitle}>TITEL: {post}</Text>
                <Text style={styles.listposttext}>HELLO AGAIN!</Text>
            </View>
        )        
    }

    return (
        <View>
            <FlatList 
            data={DATA2}
            renderItem={renderPosts}
            keyExtractor={post => post}            
            />
        </View>
    )
}

export default Listposts;