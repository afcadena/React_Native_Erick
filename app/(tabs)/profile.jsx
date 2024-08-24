import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          Cyber Copias<Text style={styles.logoDot}>.</Text>
        </Text>
        <View style={styles.navbar}>
          <Text style={styles.navItem}>Ajustes</Text>
          <Text style={styles.navItem}>Volver</Text>
        </View>
      </View>

      <View style={styles.products}>
        <Text style={styles.heading}>
          Lista De<Text style={styles.headingHighlight}> Deseos</Text>
        </Text>

        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Image style={styles.image} source={require('../../assets/prod-1.png')} />
            <View style={styles.content}>
              <Text style={styles.productName}>Cuaderno tapa dura</Text>
              <Text style={styles.price}>$12.99</Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image style={styles.image} source={require('../../assets/prod-2.png')} />
            <View style={styles.content}>
              <Text style={styles.productName}>Lapiz H2</Text>
              <Text style={styles.price}>$12.99</Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image style={styles.image} source={require('../../assets/prod-3.png')} />
            <View style={styles.content}>
              <Text style={styles.productName}>Saca puntas</Text>
              <Text style={styles.price}>$12.99</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.module}>
        <Text style={styles.moduleHeading}>Pedidos</Text>
        <Text style={styles.moduleText}>Aún no ha realizado pedidos</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logoDot: {
    color: '#ff0000', // Color del punto
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  navItem: {
    fontSize: 18,
    color: '#333',
  },
  products: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headingHighlight: {
    color: '#ff0000', // Color del texto destacado
  },
  boxContainer: {
    flexDirection: 'column',
  },
  box: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  content: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
  module: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    margin: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  moduleHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  moduleText: {
    fontSize: 16,
    color: '#333',
  },
});
