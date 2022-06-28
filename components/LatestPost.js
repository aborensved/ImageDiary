
import { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, NativeEventEmitter, FlatList } from "react-native";
import { findAll, findByID, findLatestPost } from "../database/db";
import ImgDiary from "../models/ImgDiary";
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

    const HomeTitle = () => {
        return after.map((imgdiary2) => {
            return (
                <View>
                    <Image 
                    source={require('../assets/placeholder_img.jpg')}
                    style={styles.listimage}
                    />
                    <Text key={imgdiary2.title.toString()}>{imgdiary2.title}</Text>
                </View>
            )
        })

        
        
    }



    
    return (
        <View style={styles.listpostitem}>            
            <HomeTitle/>     
        </View>
    )        
    
        
    
}

export default LatestPost;