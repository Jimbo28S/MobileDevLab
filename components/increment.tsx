import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type IncrementProps = { value: number; setValue: (value: number) => void };

const Increment: React.FC<IncrementProps> = ({ value, setValue}) => {
    const handleIncrement = () => {
        setValue(value + 1);
    };

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleIncrement}>
                    <Text style={styles.text}>Increment +</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Increment;

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
