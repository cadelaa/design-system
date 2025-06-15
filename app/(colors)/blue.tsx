import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';

export default function AlertScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.h1}>Blue palette</Text>
          </View>

            <View style={styles.content}>
                <Text style={styles.text}>
                Aa
                </Text>

                <View style={[{ gap: 0 }]}>

                  <View style={[styles.componentContainer, { backgroundColor: '#0B2148', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>110</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#0B2148</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>15.84:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#11316C', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>100</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#11316C</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>12.50:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#164190', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>90</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#164190</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>9.58:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#1C51B4', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>80</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#1C51B4</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>7.28:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#2160D6', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>70</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#2160D6</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>5.66:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#256CF0', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>60</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#256CF0</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>4.69:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#3D7CF2', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', width: 32, } ]}>50</Text>
                          <Text style={[styles.bodyText, { color: 'black', } ]}>#3D7CF2</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', }]}>5.36:1</Text>
                          <MaterialIcons size={24} name="contrast" color="black" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#5C91F4', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', width: 32, } ]}>40</Text>
                          <Text style={[styles.bodyText, { color: 'black', } ]}>#5C91F4</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', }]}>6.81:1</Text>
                          <MaterialIcons size={24} name="contrast" color="black" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#7CA7F6', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', width: 32, } ]}>30</Text>
                          <Text style={[styles.bodyText, { color: 'black', } ]}>#7CA7F6</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', }]}>8.72:1</Text>
                          <MaterialIcons size={24} name="contrast" color="black" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#9DBDF8', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', width: 32, } ]}>20</Text>
                          <Text style={[styles.bodyText, { color: 'black', } ]}>#9DBDF8</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', }]}>11.07:1</Text>
                          <MaterialIcons size={24} name="contrast" color="black" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#BDD3FA', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', width: 32, } ]}>10</Text>
                          <Text style={[styles.bodyText, { color: 'black', } ]}>#BDD3FA</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', }]}>13.86:1</Text>
                          <MaterialIcons size={24} name="contrast" color="black" />
                      </View>
                  </View>
                  
                </View>

          </View>

        </ScrollView>

        <LinearGradient
          style={styles.floatingButtonContainer}
          colors={['#FFFFFF00', '#FFFFFF']}
          locations={[0, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Pressable style={styles.floatingButton} onPress={() => router.back()}>
            <Text style={styles.floatingButtonText}>Back</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 180, // ensures last item is not hidden under the button
  },
  header: {
    backgroundColor: '#fff',
    paddingBottom: 8,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 40,
  },
  componentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    backgroundColor: '#f0f0f0',
    padding: 32,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 32,
    justifyContent: 'flex-end',
  },
  floatingButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  floatingButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 18,
  },
});
