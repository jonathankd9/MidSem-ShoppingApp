// import * as React from "react";
// import { Button, View, Text, Image } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function Login({ navigation }) {
// 	return (
// 		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

// 			<Text>Login Page</Text>
// 			<Text>Login Page</Text>
// 			<Button
// 				title="Go to Details"
// 				onPress={() => navigation.navigate("Home")}
// 			/>
// 		</View>
// 	);
// }

// export default Login;

import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";


function Login({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.logo}>Hamper Shop</Text>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Email..."
					placeholderTextColor="#003f5c"
					onChangeText={(text) => this.setState({ email: text })}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					secureTextEntry
					style={styles.inputText}
					placeholder="Password..."
					placeholderTextColor="#003f5c"
					onChangeText={(text) => this.setState({ password: text })}
				/>
			</View>
			<TouchableOpacity>
				<Text style={styles.forgot}>Forgot Password?</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.loginBtn}
				onPress={() => navigation.navigate("Home")}
			>
				<Text>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.loginBtn}
				onPress={() => navigation.navigate("SignUp")}
			>
				<Text style={styles.loginText}>Sign Up</Text>
			</TouchableOpacity>

			{/* <Button
				title="Go to Details"
				onPress={() => navigation.navigate("Home")}
			/> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#003f5c",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		fontWeight: "bold",
		fontSize: 50,
		color: "#fb5b5a",
		marginBottom: 40,
	},
	inputView: {
		width: "80%",
		backgroundColor: "#465881",
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: "center",
		padding: 20,
	},
	inputText: {
		height: 50,
		color: "white",
	},
	forgot: {
		color: "white",
		fontSize: 11,
	},
	loginBtn: {
		width: "80%",
		backgroundColor: "#fb5b5a",
		borderRadius: 25,
		height: 70,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		marginBottom: 10,
	},
	loginText: {
		color: "white",
	},
});

export default Login;
