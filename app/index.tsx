import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Signin from "../components/signin";
import Welcome from "../components/welcome";
import { useState } from "react";
import { Users } from "../constants/defaultTypes";
import React from "react";
import Decrement from "../components/decrement";
import Increment from "../components/increment";
import Lab3 from "./lab3";
import Lab4 from "./lab4";
import {Link } from "expo-router"

const userObjectDefault: Users = {
  firstName: "felix",
  lastName: "Turnbull",
  phoneNumber: "750320333",
  email: "felix@gmail.com",
  username: "felix",
  preferences: ["vegan", "vegetarian"],
};

export default function App() {
    return(
        <View style={styles.container}>
            <Link href={"/lab3"}><Text>Go to Lab 3</Text></Link>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>

            <Link href={"/lab4"}><Text>Go to Lab 4</Text></Link>
        </View>

        
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: { fontSize: 20, fontWeight: "bold" },
  text: { fontSize: 16, marginVertical: 10, color: "blue" },
  button: { marginVertical: 10 },
  input: {
    width: 200,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
})