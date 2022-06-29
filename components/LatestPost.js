
import { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, NativeEventEmitter, FlatList } from "react-native";
import { findAll, findByID, findLatestPost } from "../database/db";
import styles from '../styles/styles';
import Images from '../assets/index';
const LatestPost = ({navigation}) => {
    
    const emitter = new NativeEventEmitter();    

    const updateListener = emitter.addListener("knorr", () => {
        findLatestPost()
        .then((res) => setAfter(res))     
        .catch((err) => {
            const errmsg = err;
            console.log(errmsg);
        });
        
    });

    const deleteListener = emitter.addListener("delete", () => {
        findLatestPost()
          .then((res) => setAfter(res))
          .catch((err) => {
            const errmsg = err;
            console.log(errmsg);
          });
      });
    
    const deleteAllListener = emitter.addListener("fubar", () => {
    findLatestPost()
        .then((res) => setAfter(res))
        .catch((err) => {
        const errmsg = err;
        console.log(errmsg);
        });
    })

    const [after, setAfter] = useState([]);

    const start = () => {
        findLatestPost()
        .then((res) => setAfter(res))              
        .catch((err) => {
            const errmsg = err;
            console.log(errmsg);
        });
        return console.log('Hello START')
    }

    useEffect(() => {
        start();
            return () => {
                updateListener.remove();
                deleteListener.remove();
                deleteAllListener.remove();
            }}, [])    
    
    return after.map((imgdiary, id) => {
        var imgsource = Images.placeholder        
        switch (imgdiary.imgdata) {
            case 'mood_happy': imgsource = Images.imagehappy
                break;
            case 'mood_middle' : imgsource = Images.imagemiddle
                break;
            case 'mood_sad' : imgsource = Images.imagesad
                break;
            default: console.log('No image data was found')
        } 

        return (
            <View key={id}>
                <Image                 
                source={imgsource}
                style={styles.homelatestimage}
                />
                <Text style={styles.homelatestposttitle}>"{imgdiary.title}"</Text>
            </View>
        )
        })
}

export default LatestPost;