import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Users } from "../constants/defaultTypes";
import React from "react";

const counter = () => {
    const [count, setCount] = useState(0);

    return(
        <View>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me!
            </button>
        </View>
    )
}

export default counter;