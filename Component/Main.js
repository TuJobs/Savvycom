import React, { Component } from "react";
import {
	View,
	ScrollView,
	Text,
	Button,
	Image,
	StyleSheet
} from "react-native";
import { StackNavigator } from "react-navigation";

export default class Main extends Component {
	render() {
		return (
			<ScrollView>
				<Text>Main !!</Text>
				<View>
					<Image source={require("../img/chibi1.jpg")} />
				</View>
				<View style={{ alignItems: "center", justifyContent: "center" }}>
					<Button
						color="red"
						title="ChangeInfo"
						style={mainStyle.button}
						onPress={() => this.props.navigation.navigate("changeinfo")}
					/>
					<Button
						title="Go back"
						onPress={() => this.props.navigation.goBack()}
					/>
				</View>
			</ScrollView>
		);
	}
}

const mainStyle = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center"
	}
});
