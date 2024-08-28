import { Text, View, StyleSheet, Button, Pressable } from "react-native";

export default function exercise_2() {
  return (
    <Pressable style={styles.container} onPress={() => alert("Hello, World!")}>
      <Text style={styles.text}>Hello, World!</Text>
      <Text style={styles.button}>Press me</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  text: {
    fontSize: 20,
  }
});
