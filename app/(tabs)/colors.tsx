// home.tsx example
import { MaterialIcons } from "@expo/vector-icons";
import { router } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ColorScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor="#000" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Colors</Text>
        </View>

        {/* Example content to show scrolling */}
        <View style={styles.content}>
          <Text style={styles.text}>
            Styles are the visual aspects of a UI that give it a distinct look
            and feel. They can be customized by changing your Material theme.
          </Text>

          <Pressable onPress={() => router.push('/(colors)/neutrals')}>
            <View style={styles.componentContainer}>
              <Text style={styles.bodyText}>Neutrals</Text>
              <MaterialIcons size={24} name="arrow-forward" color="black" />
            </View>
          </Pressable>

          <Pressable onPress={() => router.push('/(colors)/blue')}>
            <View style={styles.componentContainer}>
              <Text style={styles.bodyText}>Blue</Text>
              <MaterialIcons size={24} name="arrow-forward" color="black" />
            </View>
          </Pressable>

          <View style={styles.componentContainer}>
            <Text style={styles.bodyText}>Red</Text>
            <MaterialIcons size={24} name="arrow-forward" color="black" />
          </View>
          <View style={styles.componentContainer}>
            <Text style={styles.bodyText}>Green</Text>
            <MaterialIcons size={24} name="arrow-forward" color="black" />
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    backgroundColor: "#fff",
    paddingBottom: 8,
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    paddingBottom: 40,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 40,
  },
  componentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    textAlign: "left",
  },
});
