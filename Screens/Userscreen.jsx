import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UserScreen = () => {
  const [fullName, setFullName] = useState('Jane Doe');
  const [email, setEmail] = useState('janedoe@example.com');
  const [phone, setPhone] = useState('0712345678');

  const [street, setStreet] = useState('123 Mbagathi Road');
  const [city, setCity] = useState('Nairobi');
  const [postalCode, setPostalCode] = useState('00100');
  const [country, setCountry] = useState('Kenya');

  const [isEditing, setIsEditing] = useState(false);

  // Image picker state
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Allow access to media library to set profile picture.');
      }
    })();
  }, []);

  const pickImage = async () => {
    if (!isEditing) return;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert('Profile Updated', 'Your profile has been updated successfully.');
    // You could save this info to a backend or local storage here
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: '#fff', top:20 }} >
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      {/* Profile Image */}
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={{ color: '#aaa' }}>Tap to Add Photo</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Contact Info */}
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full Name"
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        editable={isEditing}
      />
      

      {/* Address Section */}
      <Text style={styles.sectionTitle}>Physical Address</Text>
      <TextInput
        style={styles.input}
        value={street}
        onChangeText={setStreet}
        placeholder="Street Address"
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="City"
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        value={postalCode}
        onChangeText={setPostalCode}
        placeholder="Postal Code"
        keyboardType="numeric"
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        value={country}
        onChangeText={setCountry}
        placeholder="Country"
        editable={isEditing}
      />

      {!isEditing ? (
        <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
      ) : (
        <Button title="Save Changes" onPress={handleSave} />
      )}
    </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  placeholderImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
