import * as React from "react";
import { Button, View, Text, Image } from "react-native";

function Cart({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

			<Text>Cart Page</Text>
			<Text>This is the Cart Page</Text>
			<Button
				title="Go to Home"
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
}

export default Cart;