import SimpleAlert, { Alert, BasicAlert } from '@/components/Alerts';
import Button from '@/components/Buttons';
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
                  <BasicAlert type="success" title="Your changes have been saved!" message="This is the alert description which provides more context on the alert." timestamp="2m ago" onClose={() => {}} />
                  <BasicAlert type="error" title="Something went wrong." message="This is the alert description which provides more context on the alert." timestamp="2m ago" onClose={() => {}} />
                  <BasicAlert type="info" title="This is an informational alert." message="This is the alert description which provides more context on the alert." timestamp="2m ago" onClose={() => {}} />
                  <BasicAlert type="warning" title="Be careful with this action." message="This is the alert description which provides more context on the alert." timestamp="2m ago" onClose={() => {}} />
              </View>

              <View style={[{ gap: 8 }]}>
                  <Alert type="success" title="Your changes have been saved!" message="This is the alert description which provides more context on the alert." timestamp="2m ago" onClose={() => {}} />
                  <Alert type="error" title="Something went wrong." message="This is the alert description which provides more context on the alert." timestamp="2m ago" onClose={() => {}} />
                  <Alert type="info" title="This is an informational alert." message="This is the alert description which provides more context on the alert." timestamp="2m ago" onClose={() => {}} />
                  <Alert type="warning" title="Be careful with this action." message="This is the alert description which provides more context on the alert." timestamp="2m ago" onClose={() => {}} />
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
