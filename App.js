import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ListpostsScreen from './screens/ListpostsScreen';
import CreatepostScreen from './screens/CreatepostScreen';
import { AntDesign } from '@expo/vector-icons'
import { useEffect } from 'react';
import { getDiariesInfo, initDB } from './database/db';

export default function App() {

  const Tabs = createBottomTabNavigator();
  //const RootStack = createNativeStackNavigator();

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
      screenOptions={{ tabBarStyle: {backgroundColor: '#bbddbb'}, headerShown: false} }>
        <Tabs.Group>
          <Tabs.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ tabBarIcon : () => <AntDesign name="home" size={24} color="green" />}}/>
          <Tabs.Screen 
            name="List Entries" 
            component={ListpostsScreen} 
            options={{ tabBarIcon : () => <AntDesign name="bars" size={24} color="green" />}}/>
          <Tabs.Screen 
            name="Create Entry" 
            component={CreatepostScreen} 
            options={{ tabBarIcon : () => <AntDesign name="plus" size={24} color="green" />}}/>
        </Tabs.Group>
      </Tabs.Navigator>      
    </NavigationContainer>
  );
}


