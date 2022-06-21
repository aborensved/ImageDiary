import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ListpostsScreen from './screens/ListpostsScreen';
import CreatepostScreen from './screens/CreatepostScreen';
import { AntDesign } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ tabBarIcon : () => <AntDesign name="home" size={24} color="black" />}}/>
        <Tabs.Screen 
          name="List posts" 
          component={ListpostsScreen} 
          options={{ tabBarIcon : () => <AntDesign name="bars" size={24} color="black" />}}/>
        <Tabs.Screen 
          name="Create post" 
          component={CreatepostScreen} 
          options={{ tabBarIcon : () => <AntDesign name="plus" size={24} color="black" />}}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}


