
import { StyleSheet, Text, View } from "react-native";

export default function ExampleScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Example Screen</Text>
      <Text style={styles.bodyText}>For building out an example page with my completed colors and components.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: 16,
    gap: 8,
  },

  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },

  bodyText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#00000070",
    textAlign: "left",
  },
});
