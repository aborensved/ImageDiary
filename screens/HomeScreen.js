import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import styles from '../styles/styles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Välkommen till Dagboken</Text>
            </View>
            <View>
                <Text>SENASTE INLÄGGET</Text>
            </View>
            <View>
                <Pressable>
                    <Text>ADD NEW POST</Text>
                </Pressable>
            </View>            
        </View>
    )
}

export default HomeScreen;