import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import COLORS from "./src/consts/colors";
import HomeScreen from "./src/view/screens/HomeScreen";
import DetailsSceeen from "./src/view/screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
			<Stack.Navigator screenOptions={{ header: () => null }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				{/* <Stack.Screen name="Details" component={DetailsSceeen} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
