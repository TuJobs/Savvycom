import React, { Component } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	ScrollView
} from "react-native";

export default class ChangeInfo extends Component {
	render() {
		return (
			<ScrollView>
				<View style={kieu.bao}>
					<Text>This is Change Info</Text>
					<Image source={require("../img/chibi3.jpg")} />
					<View style={kieu.ao}>
						<TouchableOpacity
							justifyContent="flex-end"
							onPress={() => this.props.navigation.navigate("login")}
						>
							<Text style={{ textAlign: "center", color: "red" }}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const kieu = StyleSheet.create({
	bao: {
		justifyContent: "center",
		alignItems: "center"
	},
	ao: {
		backgroundColor: "yellow",
		width: "60%",
		marginTop: 40,
		paddingTop: 15,
		paddingBottom: 15,
		borderRadius: 5
	}
});
