import Tag from '@/components/Tag';
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ComponentScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Components</Text>
        </View>

        {/* Example content to show scrolling */}
        <View style={styles.content}>
          <Text style={styles.text}>
            Components are interactive building blocks for creating a user
            interface and have organised categories based on their purpose:
            Action, containment, communication, navigation, selection, and text
            input.
          </Text>

          <Pressable onPress={() => router.push('/(components)/alerts')}>
            <View style={styles.componentContainer}>
              <View style={[styles.componentHeadContainer]}>
                <View style={[{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, }]}>
                  <Text style={styles.h1}>Alert</Text>
                </View>
                <Tag type="completed" message="Completed" />
              </View>
              <View style={styles.componentBodyContainer}>
                <Text style={styles.bodyText}>An alert gives people critical information they need right away.</Text>
              </View>
              <View style={styles.componentFooterContainer}>
                <MaterialIcons size={24} name="arrow-forward" color="black" />
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => router.push('/(components)/buttons')}>
            <View style={styles.componentContainer}>
              <View style={[styles.componentHeadContainer]}>
                <View style={[{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, }]}>
                  <Text style={styles.h1}>Buttons</Text>
                </View>
                <Tag type="workInProgress" message="Work in Progress" />
              </View>
              <View style={styles.componentBodyContainer}>
                <Text style={styles.bodyText}>Aa</Text>
              </View>
              <View style={styles.componentFooterContainer}>
                <MaterialIcons size={24} name="arrow-forward" color="black" />
              </View>
            </View>
          </Pressable>

          <View style={styles.componentContainer}>
            <View style={[styles.componentHeadContainer]}>
              <View style={[{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, }]}>
                <Text style={styles.h1}>Cards</Text>
              </View>
              <Tag type="planned" message="Planned" />
            </View>
            <View style={styles.componentBodyContainer}>
              <Text style={styles.bodyText}>Aa</Text>
            </View>
            <View style={styles.componentFooterContainer}>
              <MaterialIcons size={24} name="arrow-forward" color="black" />
            </View>
          </View>

          <View style={styles.componentContainer}>
            <View style={[styles.componentHeadContainer]}>
              <View style={[{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, }]}>
                <Text style={styles.h1}>Links</Text>
              </View>
              <Tag type="planned" message="Planned" />
            </View>
            <View style={styles.componentBodyContainer}>
              <Text style={styles.bodyText}>Aa</Text>
            </View>
            <View style={styles.componentFooterContainer}>
              <MaterialIcons size={24} name="arrow-forward" color="black" />
            </View>
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
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#f0f0f0",
    gap: 8,
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },

  componentHeadContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },

  componentBodyContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  componentFooterContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    gap: 4,
  },

  bodyText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    textAlign: "left",
  },
});
