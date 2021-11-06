import React from "react";
import {
	View,
	SafeAreaView,
	Text,
	StyleSheet,
	FlatList,
	Image,
	Dimensions,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import plants from "../../consts/plants";
const width = Dimensions.get("window").width / 2 - 40;
import { Feather, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
	const [catergoryIndex, setCategoryIndex] = React.useState(0);

	const categories = ["CHRISTMAS", "NEW YEAR", "GIFT", "BIRTHDAY"];

	const CategoryList = () => {
		return (
			<View style={style.categoryContainer}>
				{categories.map((item, index) => (
					<TouchableOpacity
						key={index}
						activeOpacity={0.8}
						onPress={() => setCategoryIndex(index)}
					>
						<Text
							style={[
								style.categoryText,
								catergoryIndex === index && style.categoryTextSelected,
							]}
						>
							{item}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		);
	};

	const Card = ({ plant }) => {
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => navigation.navigate("Details", plant)}
			>
				<View style={style.card}>
					<View style={{ alignItems: "flex-end" }}>
						<View
							style={{
								width: 30,
								height: 30,
								borderRadius: 20,
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: plant.like
									? "rgba(245, 42, 42,0.2)"
									: "rgba(0,0,0,0.2) ",
							}}
						>
							<Icon
								name="favorite"
								size={18}
								color={plant.like ? COLORS.red : COLORS.black}
							/>
						</View>
					</View>

					<View
						style={{
							height: 100,
							alignItems: "center",
						}}
					>
						<Image
							source={plant.img}
							style={{ flex: 1, resizeMode: "contain" }}
						/>
					</View>

					<Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
						{plant.name}
					</Text>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: 5,
						}}
					>
						<Text style={{ fontSize: 19, fontWeight: "bold" }}>
							${plant.price}
						</Text>
						<View
							style={{
								height: 25,
								width: 25,
								backgroundColor: COLORS.red,
								borderRadius: 5,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text
								style={{
									fontSize: 22,
									color: COLORS.white,
									fontWeight: "bold",
								}}
							>
								+
							</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView
			style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
		>
			{/* Title: Welcome to Hamper Shop */}
			<View style={style.header}>
				<View>
					{/* <Text style={{ fontSize: 18, fontWeight: "light" }}>Hello there,</Text> */}
					<Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
					<Text style={{ fontSize: 38, fontWeight: "bold", color: COLORS.red }}>
						Hamper Shop
					</Text>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate("Cart")}><Feather name="shopping-cart" size={28} color="black" /></TouchableOpacity>
			</View>
			{/* Search box */}
			<View style={{ padding: 5, flexDirection: "row" }}>
				<View style={style.searchContainer}>
					<Feather
						name="search"
						size={25}
						color="black"
						style={{ marginLeft: 15 }}
					/>
					<TextInput placeholder="Search" style={{ marginLeft: 10 }} />
				</View>
				<View style={style.sortBtn}>
					<MaterialIcons name="sort" size={30} color="white" />
				</View>
			</View>
			<CategoryList />
			<FlatList
				columnWrapperStyle={{ justifyContent: "space-between" }}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					marginTop: 10,
					paddingBottom: 50,
				}}
				numColumns={2}
				data={plants}
				renderItem={({ item }) => {
					return <Card plant={item} />;
				}}
			/>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	header: {
		// marginTop: 20,
		// marginLeft: 20,
		// marginRight: 20,
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	searchContainer: {
		height: 50,
		backgroundColor: COLORS.gray,
		borderRadius: 10,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	categoryContainer: {
		flexDirection: "row",
		marginTop: 30,
		marginBottom: 20,
		justifyContent: "space-between",
	},
	input: {
		fontSize: 18,
		fontWeight: "bold",
		color: COLORS.dark,
		flex: 1,
	},
	sortBtn: {
		height: 50,
		width: 50,
		backgroundColor: COLORS.red,
		marginLeft: 10,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
	},
	categoryContainer: {
		marginLeft: 20,
		marginRight: 20,
		flexDirection: "row",
		marginTop: 20,
		marginBottom: 20,
		justifyContent: "space-between",
	},
	categoryText: {
		fontSize: 16,
		color: "grey",
		fontWeight: "bold",
	},
	categoryTextSelected: {
		color: COLORS.red,
		paddingBottom: 5,
		borderBottomWidth: 5,
		borderColor: COLORS.red,
	},
	card: {
		height: 225,
		backgroundColor: COLORS.light,
		width,
		marginHorizontal: 2,
		borderRadius: 10,
		marginBottom: 20,
		// marginLeft: 20,
		// marginRight: 20,
		padding: 10,
	},
});
export default HomeScreen;
