import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import icedCoffeeImg from './../assets/images/adaptive-icon.png'; // Ensure the path is correct

const App = () => {
  const router = useRouter(); // Initialize router for navigation

  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeeImg} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to Coffee Hub</Text>
          <Text style={styles.subtitle}>Explore the world of coffee, crafted just for you.</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/explore')} // Navigate to /explore
          >
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent:'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a semi-transparent overlay
    padding: 20,
  },
  title: {
    color: '#FFD700', // Golden text for elegance
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFD700', // Golden button for aesthetic appeal
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
