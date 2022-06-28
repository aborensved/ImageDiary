
import { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, NativeEventEmitter, FlatList } from "react-native";
import { findAll, findByID, findLatestPost } from "../database/db";
import styles from '../styles/styles';

const LatestPost = () => {
    
    const emitter = new NativeEventEmitter();

    const updateListener = emitter.addListener("knorr", () => {
        findLatestPost()
        .then((res) => setAfter(res))
        .then(res => console.log(after))      
        .catch((err) => {
            const errmsg = err;
            console.log(errmsg);
        });
        return console.log('Hello UPDATE')
    });

    const [after, setAfter] = useState([]);

    const start = () => {
        findLatestPost()
        .then((res) => setAfter(res))
        .then(res => console.log(after))      
        .catch((err) => {
            const errmsg = err;
            console.log(errmsg);
        });
        return console.log('Hello START')
    }

    useEffect(() => {start();
    return () => updateListener.remove()}, [])    
    
    return after.map((imgdiary2, id) => {
        return (
            <View key={id}>
                <Image                 
                source={require('../assets/placeholder_img.jpg')}
                style={styles.homelatestimage}
                />
                <Text style={styles.homelatestposttitle}>"{imgdiary2.title}"</Text>
            </View>
        )
    })       
    
        
    
}

export default LatestPost;