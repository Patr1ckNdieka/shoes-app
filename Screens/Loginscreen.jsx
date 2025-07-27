import { SafeAreaView, StyleSheet, Text,View,TextInput, Button,Alert } from 'react-native'
import React, { useState } from 'react'

const Loginscreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter email and password');
    } else {
      // Dummy login check (you can replace with real auth logic)
      if (email === 'test@example.com' && password === 'password123') {
        Alert.alert('Success', 'Logged in!');
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center p-4 bg-white top-40">
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8
  }
})

export default Loginscreen

