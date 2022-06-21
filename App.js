import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ListpostsScreen from './screens/ListpostsScreen';
import CreatepostScreen from './screens/CreatepostScreen';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeScreen}/>
        <Tabs.Screen name="List posts" component={ListpostsScreen}/>
        <Tabs.Screen name="Create post" component={CreatepostScreen}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}


