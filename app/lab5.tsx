import React from "react";
import CallAPI from "../components/callAPI";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Lab5 = () => {
  const [show, setShow] = useState(false);

  const toggleVisibility = () => {
    setShow(!show);
  };

  return (
    <View style={styles.APIData}>
      <Button color="red" title="submit" onPress={toggleVisibility} />
      {show && <CallAPI />}
    </View>
  );
};
export default Lab5;

const styles = StyleSheet.create({
  APIData: {
    color: "black",
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
