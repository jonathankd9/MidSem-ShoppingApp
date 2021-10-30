import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from './src/const/colors';
import { HomeScreen } from './screens/HomeScreen.js';
import { DetailsScreen } from './screens/DetailsScreen';


const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
	<StatusBar barStyle="dark-content" backgroundColor={COLORS.white}/>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'HomeScreen' }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
