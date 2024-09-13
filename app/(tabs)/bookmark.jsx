import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Bookmark = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookmark</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
    marginTop: 20,       // Ajusta el espacio superior del texto
    marginBottom: 15,    // Ajusta el espacio inferior del texto
    marginLeft: 10,      // Ajusta el espacio izquierdo del texto
    marginRight: 10,     // Ajusta el espacio derecho del texto
  },
});

export default Bookmark;
