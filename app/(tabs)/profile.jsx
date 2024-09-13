import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Alinea verticalmente al centro
    alignItems: 'center',       // Alinea horizontalmente al centro
    backgroundColor: '#e0e0e0', // Color de fondo opcional
  },
  text: {
    fontSize: 30,               // Tamaño del texto
    fontWeight: 'bold',         // Peso del texto
    color: '#444',              // Color del texto
  },
});

export default Profile;
