import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Signin from "../components/signin";
import Welcome from "../components/welcome";
import { useState } from "react";
import { Users } from "../constants/defaultTypes";
import React from "react";
import Decrement from "../components/decrement";
import Increment from "../components/increment";

const userObjectDefault: Users = {
  firstName: "felix",
  lastName: "Turnbull",
  phoneNumber: "750320333",
  email: "felix@gmail.com",
  username: "felix",
  preferences: ["vegan", "vegetarian"],
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [userObject, setUserObject] = useState<Users>(userObjectDefault);

    const [value, setValue] = useState<number>(0);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>My value: {value}</Text>
            <View style={styles.container}>
              <Increment value={value} setValue={setValue} />
            </View>
            <View style={styles.container}>
              <Decrement value={value} setValue={setValue} />
            </View>
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