import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Alinea verticalmente al centro
    alignItems: 'center',       // Alinea horizontalmente al centro
    backgroundColor: '#f0f0f0', // Color de fondo opcional
  },
  text: {
    fontSize: 24,               // Tamaño del texto
    fontWeight: 'bold',         // Peso del texto
    color: '#333',              // Color del texto
  },
});

export default Home;
