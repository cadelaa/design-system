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
            <Text style={styles.h1}>Buttons</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.text}>
              Buttons prompt most actions in a UI.
            </Text>

            <Button label="Primary" variant="primary" onPress={() => console.log('Pressed!')} />
            <Button label="Secondary" variant="secondary" onPress={() => {}} />
            <Button label="Text" variant="text" onPress={() => {}} />
            <Button label="Disabled" disabled onPress={() => {}} />

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
    paddingBottom: 180,
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
    gap: 16,
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
