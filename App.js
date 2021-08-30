import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Home from "./screens/Home/home";
import CreateEmployee from "./screens/CreatUser/createUser";
import Profile from "./screens/Profile/Profile";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  const appOptions = {
    title: "My Amaaaazing Contacts App =D",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#3D19F7",
    },
  };
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={appOptions} />
        <Stack.Screen
          name="CreateContact"
          component={CreateEmployee}
          options={{ ...appOptions, title: "Create Contact" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ ...appOptions, title: "Contact" }}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9eaec",
    marginTop: Constants.statusBarHeight,
    // flexDirection: 'row',
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
