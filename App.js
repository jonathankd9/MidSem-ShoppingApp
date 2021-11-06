import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "react-native";
import COLORS from "./src/consts/colors";
import HomeScreen from "./src/view/screens/HomeScreen";
import DetailsSceeen from "./src/view/screens/DetailsScreen";
import Login from "./src/view/screens/Login";
import SignUp from "./src/view/screens/SignUp";
import CartScreen from "./src/view/screens/CartScreen";
// import LoginScreen from "./src/components/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
			<Stack.Navigator>
				{/* screenOptions={{ header: () => null }} */}
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				{/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: true }}
				/>
				{/* <Stack.Screen name="Home" component={HomeScreen} /> */}

				<Stack.Screen name="Details" component={DetailsSceeen} />
				<Stack.Screen name="Cart" component={CartScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
