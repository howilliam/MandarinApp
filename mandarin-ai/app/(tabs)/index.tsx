import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Welcome to Mandarin AI</Text>
      <Text style={styles.subtitle}>Your daily Mandarin learning journey starts now.</Text>
      
      <View style={styles.buttonGroup}>
        <Button title="Start Lesson" onPress={() => router.push('/learn')} />
        <Button title="Review Words" onPress={() => router.push('/review')} />
        <Button title="Practice Speaking" onPress={() => router.push('/speak')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  buttonGroup: {
    gap: 12,
    marginTop: 24,
  },
});
