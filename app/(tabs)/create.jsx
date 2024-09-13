import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Create = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centra el contenido verticalmente
    alignItems: 'center',       // Centra el contenido horizontalmente
    backgroundColor: '#f9f9f9', // Color de fondo opcional
  },
  text: {
    fontSize: 28,               // Tamaño del texto
    fontWeight: '600',          // Peso del texto
    color: '#333',              // Color del texto
  },
});

export default Create;
