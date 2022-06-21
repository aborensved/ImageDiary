import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import styles from '../styles/styles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.hometop}>
                <Text>Välkommen till Dagboken</Text>
            </View>
            <View style={styles.listpostitem}>
                <Text>SENASTE INLÄGGET</Text>
            </View>
            <View>
                <Pressable style={styles.createbutton}>
                    <Text>ADD NEW POST</Text>
                </Pressable>
            </View>            
        </View>
    )
}

export default HomeScreen;