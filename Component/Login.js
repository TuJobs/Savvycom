import React, { Component } from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	StyleSheet,
	KeyboardAvoidingView
} from "react-native";
import { StackNavigator } from "react-navigation";

export default class Login extends Component {
	render() {
		return (
			<View style={styleLogin.container}>
				<Image
					style={styleLogin.logo}
					source={{
						uri:
							"https://i2.wp.com/technoetics.in/wp-content/uploads/2016/09/reactlogo2.png?resize=391%2C377"
					}}
				/>
				<KeyboardAvoidingView
					behavior="padding"
					style={styleLogin.keyboardAvo}
				/>
				<TextInput
					value=""
					placeholder="Tên đăng nhập"
					placeholderTextColor="#fff"
					style={styleLogin.input}
				/>

				<TextInput
					value=""
					placeholder="Mật khẩu"
					placeholderTextColor="#fff"
					style={styleLogin.input}
					secureTextEntry={true}
				/>

				<TouchableOpacity
					style={styleLogin.btnLogin}
					onPress={() => this.props.navigation.navigate("main")}
				>
					<Text style={styleLogin.txtButton}>Đăng nhập</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styleLogin = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#004466",
		justifyContent: "center",
		alignItems: "center"
	},
	logo: {
		width: 100,
		height: 100,
		marginTop: 50,
		marginBottom: 50
	},
	input: {
		width: "90%",
		height: 50,
		paddingLeft: 25,
		borderRadius: 5,
		marginBottom: 20,
		fontSize: 14,
		backgroundColor: "rgba(0,0,0,0.2)"
	},
	btnLogin: {
		width: "60%",
		marginTop: 40,
		paddingTop: 15,
		paddingBottom: 15,
		backgroundColor: "#00ace6",
		borderRadius: 5
	},
	txtButton: {
		color: "white",
		textAlign: "center"
	},
	keyboardAvo: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center"
	}
});
