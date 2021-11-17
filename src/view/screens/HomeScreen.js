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
import hampers from "../../consts/hampers";
const width = Dimensions.get("window").width / 2 - 40;
import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const HomeScreen = ({ navigation }) => {
	var [cart, updateCart] = React.useState([]);
	var [totalCart, updateNumber] = React.useState(0);
	var [totalPrice, updateTotalPrice] = React.useState(0);

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

	const Card = ({ hamper }) => {
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => navigation.navigate("Details", hamper)}
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
								backgroundColor: hamper.like
									? "rgba(245, 42, 42,0.2)"
									: "rgba(0,0,0,0.2) ",
							}}
						>
							<Icon
								name="favorite"
								size={18}
								color={hamper.like ? COLORS.red : COLORS.black}
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
							source={hamper.img}
							style={{ flex: 1, resizeMode: "contain" }}
						/>
					</View>

					<Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
						{hamper.name}
					</Text>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: 5,
						}}
					>
						<Text style={{ fontSize: 19, fontWeight: "bold" }}>
							${hamper.price}
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

{/* Add to Cart button */}
			<TouchableOpacity
        style={{
          backgroundColor: "#f07e05",
          borderRadius: 10,
          padding: 4,
          alignItems: "center",
          justifyContent: "center",
          //marginTop: 10,
          flexDirection: "row",
          marginTop:-4
        }}
        onPress={() => {
          updateNumber((totalCart -= 1));
          updateCart(cart.filter((product) => product !== item));
        }}>
          <AntDesign
            name="plus"
            size={19}
            color="white"
            style={{ paddingHorizontal: 10 }}
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Add to Cart
          </Text>
      </TouchableOpacity>

</View>


	</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView
			style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
		>
			{/* Title: Welcome to Hamper Shop */}
			<View>
				<View>
					<View style={style.linecart}>
					{/* <Text style={{ fontSize: 18, fontWeight: "light" }}>Hello there,</Text> */}
					<Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>

					{/* Cart Icon Direction */}

					<TouchableOpacity onPress={()=>navigation.navigate("Cart", {cart})}>
					<View
          style={{
            height: 20,
            width: 20,
            backgroundColor: COLORS.red,
            borderRadius: 10,
            position: "absolute",
            right: -3,
            elevation: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" ,fontWeight:'bold'}}>{cart.length}</Text>
        </View>
					<Icon style={{ alignSelf: "center", top: 5 }} name="shopping-cart" size={28} />
					</TouchableOpacity>
					</View>


					{/* Hamper Shop */}
					<Text style={{ fontSize: 38, fontWeight: "bold", color: COLORS.red }}>
						Hamper Shop
					</Text>
				</View>	


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
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop:10,
          paddingBottom:50,
        }}
        numColumns={2}
        key = {({item}) => item.id}
        data={hampers} 
        renderItem={({item, index}) => 
        (
          <SafeAreaView style={styles.container}>
          
           <View style={{alignItems:'flex-end'}}>
               <View style={{width:30,
                            height:30,
                            borderRadius:10, 
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:item.like ? 'rgba(245,42,42,0.2)': 'rgba(0,0,0,0.2)'}}>
                   <MaterialIcons name='favorite' size={19} color={item.like? 'red':'black'}/>
               </View>
           </View>
           <TouchableOpacity
             onPress={()=>navigation.navigate("Details", item)}>
          <View style={styles.img}>
          <Image
           style = {styles.image}
           source= {item.img}/>
          </View> 
          </TouchableOpacity>
          <Text style={styles.watchName}>
               {item.name}
          </Text>
          <View style={styles.price_container}>
          {/* <Text style={styles.currency}>
            {item.currency}
          </Text> */}
          <Text style={styles.price}>
              ${item.price}
          </Text>
          </View>

          
          {cart.includes(item) ? (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      backgroundColor: "#bdbdbd",
                      borderRadius: 5,
                      padding: 4,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: -4,
                      flexDirection: "row",
                    }}
                    onPress={() => {
                      updateNumber((totalCart -= 1));

                      updateCart(cart.filter((product) => product !== item));
                    }}
                  >
                    
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                        backgroundColor: "red",
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 20,
                      }}
                    >
                      <AntDesign name="minus" size={18} color="white" />
                    </View>
                    <Text style={{ fontWeight: "bold" }}>Added</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.red,
                      borderRadius: 5,
                      padding: 4,
                      alignItems: "center",
                      justifyContent: "center",
                      //marginTop: 10,
                      flexDirection: "row",
                      marginTop:-4
                    }}
                    onPress={() => {
                      

                      updateCart([...cart, item]);
                    }}
                  >
                    <AntDesign
                      name="plus"
                      size={19}
                      color="white"
                      style={{ paddingHorizontal: 10 }}
                    />
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                )}
          
          
          
        </SafeAreaView>

        )}
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
	linecart: {
		paddingHorizontal: 0,
		marginTop: 20,
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
