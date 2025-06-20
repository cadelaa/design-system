import SimpleAlert from '@/components/Alerts';
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
            <Text style={styles.h1}>Alerts</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.text}>
              An alert gives people critical information they need right away.
            </Text>



            <View style={[{ gap: 40 }]}>


              <View style={[{ gap: 8 }]}>
                  <SimpleAlert type="success" message="Your changes have been saved!" />
                  <SimpleAlert type="error" message="Something went wrong." />
                  <SimpleAlert type="info" message="This is an informational alert." />
                  <SimpleAlert type="warning" message="Be careful with this action." />
              </View>

              <View style={[{ gap: 8 }]}>
                <View style={[{ borderRadius: 8, gap: 8, backgroundColor: '#D1FAE5', padding: 16, flexDirection: 'row', alignItems: 'center' }]}>
                  <MaterialIcons size={24} name="check-circle" color="#065F46" />
                  <View style={[{ gap: 4, flex: 1, flexShrink: 1 }]}>
                    <Text style={[{ color: '#065F46', fontSize: 18, fontWeight: '600', }]}>This is the Success Alert</Text>
                    <Text style={[{ color: '#065F46', fontSize: 14, }]}>This is the alert description which provides more context on the alert.</Text>
                  </View>
                </View>

                <View style={[{ borderRadius: 8, gap: 8, backgroundColor: '#FECACA', padding: 16, flexDirection: 'row', alignItems: 'center' }]}>
                  <MaterialIcons size={24} name="error" color="#991B1B" />
                  <View style={[{ gap: 4, flex: 1, flexShrink: 1 }]}>
                    <Text style={[{ color: '#991B1B', fontSize: 18, fontWeight: '600', }]}>This is the Error Alert</Text>
                    <Text style={[{ color: '#991B1B', fontSize: 14, }]}>This is the alert description which provides more context on the alert.</Text>
                  </View>
                </View>

                <View style={[{ borderRadius: 8, gap: 8, backgroundColor: '#DBEAFE', padding: 16, flexDirection: 'row', alignItems: 'center' }]}>
                  <MaterialIcons size={24} name="info" color="#1E3A8A" />
                  <View style={[{ gap: 4, flex: 1, flexShrink: 1 }]}>
                    <Text style={[{ color: '#1E3A8A', fontSize: 18, fontWeight: '600', }]}>This is the Info Alert</Text>
                    <Text style={[{ color: '#1E3A8A', fontSize: 14, }]}>This is the alert description which provides more context on the alert.</Text>
                  </View>
                </View>

                <View style={[{ borderRadius: 8, gap: 8, backgroundColor: '#FEF3C7', padding: 16, flexDirection: 'row', alignItems: 'center' }]}>
                  <MaterialIcons size={24} name="warning" color="#92400E" />
                  <View style={[{ gap: 4, flex: 1, flexShrink: 1 }]}>
                    <Text style={[{ color: '#92400E', fontSize: 18, fontWeight: '600', }]}>This is the Warning Alert</Text>
                    <Text style={[{ color: '#92400E', fontSize: 14, }]}>This is the alert description which provides more context on the alert.</Text>
                  </View>
                </View>
              </View>

              <View style={[{ gap: 8 }]}>
                <View style={[{ borderRadius: 8, gap: 8, backgroundColor: '#D1FAE5', padding: 16, flexDirection: 'row', alignItems: 'center' }]}>
                  <View style={[{ gap: 4, flex: 1, flexShrink: 1 }]}>
                    <Text style={[{ color: '#065F46', fontSize: 18, fontWeight: '600', }]}>This is the Success Alert</Text>
                    <Text style={[{ color: '#065F46', fontSize: 14, }]}>This is the alert description which provides more context on the alert.</Text>
                    <Text style={[{ color: '#065F46', fontSize: 14, opacity: 0.6, }]}>2m ago</Text>
                  </View>
                  <MaterialIcons size={24} name="close" color="#065F46" />
                </View>

                <View style={[{ borderRadius: 8, gap: 8, backgroundColor: '#FECACA', padding: 16, flexDirection: 'row', alignItems: 'center' }]}>
                  <View style={[{ gap: 4, flex: 1, flexShrink: 1 }]}>
                    <Text style={[{ color: '#991B1B', fontSize: 18, fontWeight: '600', }]}>This is the Error Alert</Text>
                    <Text style={[{ color: '#991B1B', fontSize: 14, }]}>This is the alert description which provides more context on the alert.</Text>
                    <Text style={[{ color: '#991B1B', fontSize: 14, opacity: 0.6, }]}>2m ago</Text>
                  </View>
                  <MaterialIcons size={24} name="close" color="#991B1B" />
                </View>

                <View style={[{ borderRadius: 8, gap: 8, backgroundColor: '#DBEAFE', padding: 16, flexDirection: 'row', alignItems: 'center' }]}>
                  <View style={[{ gap: 4, flex: 1, flexShrink: 1 }]}>
                    <Text style={[{ color: '#1E3A8A', fontSize: 18, fontWeight: '600', }]}>This is the Info Alert</Text>
                    <Text style={[{ color: '#1E3A8A', fontSize: 14, }]}>This is the alert description which provides more context on the alert.</Text>
                    <Text style={[{ color: '#1E3A8A', fontSize: 14, opacity: 0.6, }]}>2m ago</Text>
                  </View>
                  <MaterialIcons size={24} name="close" color="#1E3A8A" />
                </View>

                <View style={[{ borderRadius: 8, gap: 8, backgroundColor: '#FEF3C7', padding: 16, flexDirection: 'row', alignItems: 'center' }]}>
                  <View style={[{ gap: 4, flex: 1, flexShrink: 1 }]}>
                    <Text style={[{ color: '#92400E', fontSize: 18, fontWeight: '600', }]}>This is the Warning Alert</Text>
                    <Text style={[{ color: '#92400E', fontSize: 14, }]}>This is the alert description which provides more context on the alert.</Text>
                    <Text style={[{ color: '#92400E', fontSize: 14, opacity: 0.6, }]}>2m ago</Text>
                  </View>
                  <MaterialIcons size={24} name="close" color="#92400E" />
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
  h2: {
    fontSize: 20,
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
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    gap: 16,
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
