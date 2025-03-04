import React from "react";
import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CallAPI = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <View>
      <Text style={styles.APIText}>UserId: {data.userId}</Text>
      <Text style={styles.APIText}>id: {data.id}</Text>
      <Text style={styles.APIText}>title: {data.title}</Text>
      <Text style={styles.APIText}>body: {data.body}</Text>
    </View>
  );
};

export default CallAPI;

const styles = StyleSheet.create({
  APIData: {
    color: "white",
    width: "100%",
    height: "100%",
    backgroundColor: "blue",
  },
  APIText: {
    color: "white",
    borderWidth: 7,
    borderColor: "green",
    borderRadius: 5,
    marginTop: 40,
    fontSize: 25,
  },
});
