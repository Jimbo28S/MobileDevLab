import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Users } from "../constants/defaultTypes";
import React from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <View>
            <Text>My value: {count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                Click Me!
            </TouchableOpacity>
        </View>
    )
}

export default Counter;