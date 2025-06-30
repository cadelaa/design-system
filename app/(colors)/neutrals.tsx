import Button from '@/components/Buttons';
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AlertScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.h1}>Neutral palette</Text>
          </View>

            <View style={styles.content}>
                <Text style={styles.text}>
                These ideally make up around 60-70 percent of color used in design systems. Leaving the rest to the primary or secondary brand colors.
                </Text>

                <View style={[{ gap: 0 }]}>

                  <View style={[styles.componentContainer, { backgroundColor: '#1A1A1A', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>110</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#1A1A1A</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>17.40:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#262626', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>100</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#262626</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>15.13:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#333333', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>90</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#333333</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>12.63:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#404040', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>80</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#404040</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>10.37:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#4C4C4C', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>70</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#4C4C4C</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>8.59:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#555555', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>60</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#555555</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>7.46:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#686868', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', width: 32, } ]}>50</Text>
                          <Text style={[styles.bodyText, { color: 'white', } ]}>#686868</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'white', }]}>5.57:1</Text>
                          <MaterialIcons size={24} name="contrast" color="white" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#808080', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', width: 32, } ]}>40</Text>
                          <Text style={[styles.bodyText, { color: 'black', } ]}>#808080</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', }]}>5.32:1</Text>
                          <MaterialIcons size={24} name="contrast" color="black" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#999999', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', width: 32, } ]}>30</Text>
                          <Text style={[styles.bodyText, { color: 'black', } ]}>#999999</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', }]}>7.37:1</Text>
                          <MaterialIcons size={24} name="contrast" color="black" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#B2B2B2', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', width: 32, } ]}>20</Text>
                          <Text style={[styles.bodyText, { color: 'black', } ]}>#B2B2B2</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', }]}>9.90:1</Text>
                          <MaterialIcons size={24} name="contrast" color="black" />
                      </View>
                  </View>

                  <View style={[styles.componentContainer, { backgroundColor: '#CCCCCC', }]}>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', width: 32, } ]}>10</Text>
                          <Text style={[styles.bodyText, { color: 'black', } ]}>#CCCCCC</Text>
                      </View>
                      <View style={[{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', }]}>
                          <Text style={[styles.bodyText, { color: 'black', }]}>13.08:1</Text>
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

          <Button label={'Back'} variant="default" onPress={() => router.back()} style={{ alignSelf: 'stretch' }}></Button>
        
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
