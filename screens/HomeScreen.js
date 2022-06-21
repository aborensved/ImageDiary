import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import styles from '../styles/styles';
import { AntDesign } from '@expo/vector-icons'

const HomeScreen = () => {

    const CreatePostButton = ({title, icon}) => {
        return (<Pressable style={styles.createbutton}>
            <Text>{title}</Text>
                {icon}                 
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.hometop}>
                <Text>Välkommen till Dagboken</Text>
            </View>
            <View style={styles.homelatestpost}>
                <Text>SENASTE INLÄGGET</Text>
            </View>
            <View>
                <CreatePostButton 
                    title={'Add new post'}
                    icon={<AntDesign name="plus" size={24} color="black" />}
                    
                    />
            </View>            
        </View>
    )
}

export default HomeScreen;