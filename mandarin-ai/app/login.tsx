import { View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';


export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // TODO: Replace with real auth logic (Firebase, Supabase, etc.)
        if (email === 'test@example.com' && password === '123456') {
          // ✅ Redirect to home tab screen after login
          router.replace('/(tabs)/home');
        } else {
          Alert.alert('Login Failed', 'Invalid credentials.');
        }
    };
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput 
        placeholder="Email" 
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input}
        value={password}
        onChangeText={setPassword}
         />
      <Button title="Continue" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, marginBottom: 16 },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});