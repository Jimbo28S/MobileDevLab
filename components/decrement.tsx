import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type DecrementProps = { value: number; setValue: (value: number) => void };

const Decrement: React.FC<DecrementProps> = ({ value, setValue}) => {
    const handleDecrement = () => {
        setValue(value - 1);
    };

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleDecrement}>
                    <Text style={styles.text}>Decrement -</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Decrement;

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
