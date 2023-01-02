import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER !</Title>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={require("../assets/success.png")} />
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.highlight}>X</Text> rounds to
				guess the number <Text style={styles.highlight}>Y</Text>
			</Text>
			<PrimaryButton>Start New Game</PrimaryButton>
		</View>
	);
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	imageContainer: {
		borderRadius: deviceWidth < 380 ? 75 : 150,
		width: deviceWidth < 380 ? 150 : 300,
		height: deviceWidth < 380 ? 150 : 300,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: "hidden",
		margin: 36,
	},
	//
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		fontSize: 24,
		textAlign: "center",
		fontFamily: "open-sans",
		marginVertical: 24,
	},
	highlight: {
		fontFamily: "open-sans-bold",
		color: Colors.primary500,
	},
});

export default GameOverScreen;
