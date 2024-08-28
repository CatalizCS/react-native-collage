import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const Square = ({ text = "", bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

export default function exercise_6() {
  const data = [...Array(15)].map((_, i) => i + 1);

  return (
    <ScrollView style={styles.container}>
      {data.map((item) => (
        <Square key={item} text={`Square ${item}`} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
