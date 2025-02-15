import React from "react";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import vacationDestinations from "../constants/list_items";

const Lab4 = () => {
  let [selectedIds, setSelectedIds] = useState<number[]>([]);

  const HandleSelection = (id: number) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Choose the destination you would like a quote for
      </Text>

      <FlatList
        contentContainerStyle={styles.listBox}
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => HandleSelection(item.id)}
            style={[styles.locationBox]}
          >
            <Text style={styles.locationBox}>
              {item.location} {selectedIds.includes(item.id) ? "\u2705" : ""}
            </Text>
            <Text> Price: ${item.price}</Text>
            <Text> Average Temp: {item.average_yearly_temperature}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Lab4;

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
  locationBox: {
    margin: 10,
    padding: 5,
  },
  listBox: {
    width: 393,
    alignItems: "center",
  },
});
