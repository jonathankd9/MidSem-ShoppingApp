import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./screens/Login.js";
import { Home } from "./screens/Home.js";
import { Cart } from "./screens/Cart.js";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* <AppStack.Screen name="Login Page" component={Login} />  */}
				<Stack.Screen
					options={{
						header: () => null,
					}}
					name="Login"
					component={Login} 
          options={{ title: 'Cart' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
