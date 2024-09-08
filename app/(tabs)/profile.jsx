import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          Cyber Copias<Text style={styles.logoDot}>.</Text>
        </Text>
      </View>

      <View style={styles.banner}>
        <Image style={styles.bannerImage} source={require('../../assets/images/escritura.jpg')} />
        <Text style={styles.bannerText}>¡Bienvenido a CyberCopias!</Text>
      </View>

      <View style={styles.products}>
        <Text style={styles.heading}>
          Lista de<Text style={styles.headingHighlight}> Deseos</Text>
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
              <Text style={styles.productName}>Lápiz H2</Text>
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
        <TouchableOpacity style={styles.button} onPress={() => alert('Añadir Pedido')}>
          <Text style={styles.buttonText}>Añadir Pedido</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>¡Gracias por visitarnos!</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa', // Color de fondo más suave
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', // Color del borde inferior
    marginBottom: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333', // Color de texto más oscuro
  },
  logoDot: {
    color: '#007bff', // Color azul para el punto
  },
  banner: {
    marginBottom: 20,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  bannerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  products: {
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333', // Color del encabezado
    marginBottom: 20,
  },
  headingHighlight: {
    color: '#007bff', // Color azul para el texto destacado
  },
  boxContainer: {
    flexDirection: 'column',
  },
  box: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333', // Color del nombre del producto
  },
  price: {
    fontSize: 16,
    color: '#666666', // Color del precio
    marginTop: 5,
  },
  module: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 20,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  moduleHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333', // Color del encabezado del módulo
    marginBottom: 10,
  },
  moduleText: {
    fontSize: 16,
    color: '#666666', // Color del texto del módulo
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
  },
});
