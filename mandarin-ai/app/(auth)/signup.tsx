import { View, Text, TextInput, Button, StyleSheet, Alert, useColorScheme } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignUp = () => {
      // Basic input validation
      if (!email || !password || !confirmPassword) {
        Alert.alert('Missing Info', 'Please fill out all fields.');
        return;
      }
  
      if (password !== confirmPassword) {
        Alert.alert('Password Mismatch', 'Passwords do not match.');
        return;
      }
  
      // TODO: Replace with real sign-up logic (Firebase, etc.)
      if (email && password.length >= 6) {
        // ✅ On success, redirect to home or welcome screen
        router.replace('/(tabs)/home');
      } else {
        Alert.alert('Error', 'Something went wrong.');
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        />
      <TextInput placeholder="Password" 
        secureTextEntry 
        style={styles.input}
        value={password}
        onChangeText={setPassword} 
        />
       <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Create Account" onPress={handleSignUp} />
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