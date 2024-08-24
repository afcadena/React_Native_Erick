import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Home Section */}
      <ImageBackground source={require('../../assets/wall_page-0001.jpg')} style={styles.home}>
        <View style={styles.content}>
          <Text style={styles.title}>Bienvenido Cliente</Text>
          <Text style={styles.subtitle}>Gran variedad de materiales</Text>
          <Text style={styles.paragraph}>
            Somos tu destino para materiales de papelería de calidad. Ofrecemos una amplia gama de productos, atención personalizada y un compromiso con la sostenibilidad.
          </Text>
          <TouchableOpacity style={styles.btn} onPress={() => router.push('#products')}>
            <Text style={styles.btnText}>Ver ahora</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Products Section */}
      <View style={styles.products}>
        <Text style={styles.heading}>Lista <Text style={styles.span}>Productos</Text></Text>

        <View style={styles.productContainer}>
          {/* Producto Individual */}
          <View style={styles.productBox}>
            <Image source={require('../../assets/prod-1.png')} style={styles.productImage} />
            <Text style={styles.productTitle}>Cuaderno tapa dura</Text>
            <Text style={styles.productPrice}>$12.99</Text>
            <TouchableOpacity style={styles.cartBtn}>
              <Text style={styles.cartBtnText}>Individual</Text>
            </TouchableOpacity>
          </View>

          {/* Repetir para otros productos */}
          <View style={styles.productBox}>
            <Image source={require('../../assets/prod-2.png')} style={styles.productImage} />
            <Text style={styles.productTitle}>Lápiz H2</Text>
            <Text style={styles.productPrice}>$12.99</Text>
            <TouchableOpacity style={styles.cartBtn}>
              <Text style={styles.cartBtnText}>Individual</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.about}>
        <Text style={styles.heading}>Sobre <Text style={styles.span}>Nosotros</Text></Text>
        <Text style={styles.paragraph}>
          Nuestra papelería es la elección principal cuando se trata de comprar materiales de papelería. Nos enorgullece ofrecer una amplia gama de productos de alta calidad a precios competitivos...
        </Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Cyber Copias. Todos los derechos reservados.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#D2A857',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  home: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
  paragraph: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
  },
  btn: {
    backgroundColor: '#D2A857',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  products: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  span: {
    color: '#D2A857',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productBox: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  cartBtn: {
    marginTop: 10,
    backgroundColor: '#D2A857',
    padding: 10,
    borderRadius: 5,
  },
  cartBtnText: {
    color: '#fff',
  },
  about: {
    padding: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
