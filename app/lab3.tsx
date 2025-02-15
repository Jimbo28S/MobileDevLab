import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Decrement from "../components/decrement";
import Increment from "../components/increment";
import Counter from "../components/counter"

const Lab3 = () => {
    const [value, setValue] = useState<number>(0);
    return(
        <View style={styles.container}>
            <Counter />
            <View style={styles.container}>
                <Increment value={value} setValue={setValue} />
            </View>
            <View style={styles.container}>
                <Decrement value={value} setValue={setValue} />
            </View>
        </View>
    )
}

export default Lab3;


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
  });