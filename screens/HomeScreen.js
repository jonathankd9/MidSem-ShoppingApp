import React from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet } from "react-native";
import COLORS from "../src/const/colors";
import { Feather } from '@expo/vector-icons';

// import Icon from "react-native-vector-icons";
// import { Ionicons } from '@expo/vector-icons';

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });

// export const Login = () => {
// 	return (
// 		<View style={styles.container}>
// 			<Text>This is the Login page</Text>
// 		</View>
// 	);
// };

export const HomeScreen = () => {
	return (
		<SafeAreaView
			style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
		>
		{/* Title: Welcome to Hamper Shop */}
			<View style={style.header}>
			<View>
			<Text style={{fontSize: 25, fontWeight: "bold"}}>Welcome to</Text>
			<Text style={{fontSize: 38, fontWeight: "bold", color: COLORS.red}}>Hamper Shop</Text>
			</View>
			<Feather name="shopping-cart" size={28} color="black" />
			</View>
			{/* Search box */}
			<View style= {{padding: 15, flexDirection:'row'}}>
			<View style={style.searchContainer}>
			<Feather name="search" size={25} color="black" style={{marginLeft:15}} />
			<TextInput placeholder="Search" style={{marginLeft: 10}} />
			</View>

			</View>

		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	header: {
		// marginTop: 20,
		// marginLeft: 15,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		
	},
	searchContainer: {
		height: 50,
		backgroundColor: COLORS.gray, 
		borderRadius: 10,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		fontSize: 18,
		fontWeight: "bold",
		color: COLORS.dark,
		flex: 1,
	}
});
