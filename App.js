import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ListpostsScreen from './screens/ListpostsScreen';
import CreatepostScreen from './screens/CreatepostScreen';
import PostdetailScreen from './screens/PostdetailScreen'
import { AntDesign } from '@expo/vector-icons'
import { useEffect } from 'react';
import { getDiariesInfo, initDB } from './database/db';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { render } from 'react-dom';
import {styles} from './styles/styles'


//const NativeStack = createNativeStackNavigator();

export default function App() {

  const Tabs = createBottomTabNavigator();
  const RootStack = createNativeStackNavigator();

  useEffect(() => {
    initDB()
      .then(res => {
        console.log("database result: ", res)
        return getDiariesInfo()
      })
      .then(res => console.log("getDiariesInfo result: ", res))
      .catch(err => console.log(err))
  }, [])

  return (
    <NavigationContainer>
      <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#bbddbb',
          
        },
      }}>
        <Tabs.Group>
          <Tabs.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ tabBarIcon : () => <AntDesign name="home" size={24} color="green" />}}
            />
          <Tabs.Screen 
            name="List posts" 
            component={ListpostsScreen} 
            options={{ tabBarIcon : () => <AntDesign name="bars" size={24} color="green" />}}/>
          <Tabs.Screen 
            name="Create post" 
            component={CreatepostScreen} 
            options={{ tabBarIcon : () => <AntDesign name="plus" size={24} color="green" />}}/>
        </Tabs.Group>
      </Tabs.Navigator>      
    </NavigationContainer>
  );
}


