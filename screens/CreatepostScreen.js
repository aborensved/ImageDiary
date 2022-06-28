import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import DiaryInput from '../components/DiaryInput';
import { findAll } from '../database/db';
import styles from '../styles/styles';



const CreatepostScreen = ({navigation}) => {

    

    return (
        <View style={styles.container}>            
            <DiaryInput             
            navigation={navigation}
            />            
        </View>
    )
    
}

export default CreatepostScreen;