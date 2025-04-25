import { View, Text, TextInput, Button, StyleSheet, Alert, useColorScheme} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';


export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const theme = useColorScheme();
    const isDark = theme === 'dark';

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
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <Text style={[styles.title, {color: isDark ? '#fff' : '#000'}]}>Log In</Text>
      <TextInput 
        placeholder="Email" 
        placeholderTextColor={isDark ? '#aaa' : '#666'}
        style={[styles.input, { color: isDark ? '#fff' : '#000', borderColor: isDark ? '#555' : '#ccc' }]}
        value={email}
        onChangeText={setEmail}
        />
      <TextInput 
        placeholder="Password" 
        placeholderTextColor={isDark ? '#aaa' : '#666'}
        secureTextEntry
        style={[styles.input, { color: isDark ? '#fff' : '#000', borderColor: isDark ? '#555' : '#ccc' }]}
        value={password}
        onChangeText={setPassword}
         />
      <Button title="Continue" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});