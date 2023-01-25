import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const StateScreen = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {count}</Text>
      <View style={{ height: 16 }} />

      <View style={{ flexDirection: "row" }}>
        <Button
          title="back"
          color="deepskyblue"
          onPress={() => setCount((prev) => prev - 1)}
        />
        <View style={{ width: 16 }} />
        <Button
          title="next"
          color="deepskyblue"
          onPress={() => setCount((prev) => prev + 1)}
        />
      </View>
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
    fontSize: 20,
    textAlign: "center",
  },
});
