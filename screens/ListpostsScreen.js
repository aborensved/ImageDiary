import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View, ScrollView, NativeEventEmitter, Pressable } from "react-native";
import Listposts from "../components/Listposts";
import styles from "../styles/styles";
import { findAll, deleteAll } from "../database/db";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Postdetailscreen from "./PostdetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import LatestPost from "../components/LatestPost";

// Kolla upp fetch för denna listan!
// ref: onsdagens lektion
// Fetch avser HTTP anrop, vilket vi inte ska använda, då vi har en lokal databas.

// Vi ska få in en en useState in hit som vi skickar in i ListPosts
// Vi gör en hämtnign från DB som skickar dem vidare från skärmen och listar dem.

const ListpostsScreen = ({ navigation }) => {
  const RootStack = createNativeStackNavigator();

  const [listDiaries, setListDiaries] = useState([]);

  const emitter = new NativeEventEmitter();

  const updateListener = emitter.addListener("knorr", () => {
    findAll()
      .then((res) => setListDiaries(res))
      .catch((err) => {
        const errmsg = err;
        console.log(errmsg);
      });
  });

  const deleteListener = emitter.addListener("delete", () => {
    findAll()
      .then((res) => setListDiaries(res))
      .catch((err) => {
        const errmsg = err;
        console.log(errmsg);
      });
  });

  const deleteAllListener = emitter.addListener("fubar", () => {
    findAll()
      .then((res) => setListDiaries(res))
      .catch((err) => {
        const errmsg = err;
        console.log(errmsg);
      });
  })

  useEffect(() => {
    findAll()
      .then((res) => setListDiaries(res))
      .catch((err) => {
        const errmsg = err;
        console.log(errmsg);
      });
    return () => {
      updateListener.remove();
      deleteListener.remove();}
  }, []);

  const handleNukeDb = () => {
    console.log('hello')
    deleteAll()
    .then(res => emitter.emit("fubar"))
    .catch(err => console.log(err))

  }

  const ListView = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Pressable onPress={handleNukeDb} style={styles.listremoveall}>
                <Text>Nuke DB</Text>
        </Pressable>  
        <Listposts
          listDiaries={listDiaries}
          setListDiaries={setListDiaries}
          navigation={navigation}
        />
              
      </View>
    );
  };

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="ListView"
          component={ListView}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="PostdetailScreen"
          component={Postdetailscreen}
          options={{ presentation: "modal", headerShown: false }}
        ></RootStack.Screen>
      </RootStack.Group>
    </RootStack.Navigator>
  );
};


export default ListpostsScreen;
