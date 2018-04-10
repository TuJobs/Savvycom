import React from "react";
import {} from "react-native";
import Login from "./Component/Login.js";
import ChangeInfo from "./Component/ChangeInfo.js";
import Main from "./Component/Main.js";
import { StackNavigator } from "react-navigation";

const RootStack = StackNavigator(
	{
		login: {
			screen: Login
		},
		changeinfo: {
			screen: ChangeInfo
		},
		main: {
			screen: Main
		}
	},
	{
		initialRouteName: "login"
	}
);
export default class App extends React.Component {
	render() {
		return <RootStack />;
	}
}
