import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

export const EffectScreen = () => {
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    Alert.alert("Change registered");
  }, [state]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>State: {state}</Text>
      <View style={{ height: 16 }} />
      <Button
        title="sum"
        onPress={() => setState((prev) => prev + 1)}
        color="deepskyblue"
      />
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
