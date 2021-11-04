import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function SignUp({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.logo}>Hamper Shop</Text>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Username"
					placeholderTextColor="#003f5c"
					onChangeText={(text) => this.setState({ email: text })}
				/>
			</View>
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
			<View style={styles.inputView}>
				<TextInput
					secureTextEntry
					style={styles.inputText}
					placeholder="Retype Password..."
					placeholderTextColor="#003f5c"
					onChangeText={(text) => this.setState({ password: text })}
				/>
			</View>
			<TouchableOpacity style={styles.loginBtn}>
				<Text style={styles.loginText}>Sign Up</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					backgroundColor: "#e3e3e3",
					padding: 10,
					paddingHorizontal: 60,
					marginTop: 20,
					borderRadius: 10,
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 17, marginLeft: 15 }}>Sign Up</Text>
			</TouchableOpacity>
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

export default SignUp;
