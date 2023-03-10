import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress, disabled }) {
	return (
		<View style={styles.outerContainer}>
			<Pressable
				onPress={onPress}
				//in android we see the ripple effect and opacity effect
				//in ios we see only opacity effect
				style={({ pressed }) =>
					pressed
						? [styles.innerContainer, styles.pressed]
						: [styles.innerContainer, disabled && styles.disabled]
				}
				android_ripple={{ color: Colors.primary600 }}
				disabled={disabled}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden", //to avoid the ripple effect from going outside the element
	},
	innerContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	// for adding ripple like effect in ios
	pressed: {
		opacity: 0.75,
	},
	disabled: {
		opacity: 0.2,
	},
});

export default PrimaryButton;
