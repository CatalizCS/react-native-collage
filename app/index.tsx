import { Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { HelloWave } from "@/components/HelloWave";

export default function Index() {
  return (
    <ParallaxScrollView
      headerImage={<Text style={styles.text}>React Native Course - 2124801030104</Text>}
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <ThemedText type="defaultSemiBold">
        <Text style={styles.text}>Content</Text>
        <HelloWave />
        <ThemedText type="link">
          <Link href="/Lab1/exercise_1">Go to Lab 1</Link>
        </ThemedText>
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
