import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUser } from "../hooks";

export const ContextScreen = () => {
  const { name, lastName, age } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User data</Text>
      <View style={{ height: 16 }}></View>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Last name: {lastName}</Text>
      <Text style={styles.text}>Age: {age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
