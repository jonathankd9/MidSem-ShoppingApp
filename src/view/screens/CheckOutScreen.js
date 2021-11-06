import * as React from "react";
import { Button, View, Text, Image } from "react-native";

function CheckOut({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

			<Text>Checkout Page</Text>
			<Text>This is the Checkout Page</Text>
			<Button
				title="Go to Home"
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
}

export default Cart;