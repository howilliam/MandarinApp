import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function AuthScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Mandarin AI</Text>
      <Text style={styles.subtitle}>Learn Mandarin faster with AI</Text>

      <View style={styles.buttonGroup}>
        <Button title="Log In" onPress={() => router.push('/login')} />
        <Button title="Sign Up" onPress={() => router.push('/signup')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 36,
  },
  buttonGroup: {
    width: '100%',
    gap: 16,
  },
});