import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Linking, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router'; // Importa router para redirección

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background Image */}
      <ImageBackground source={require('../assets/wall_page-0001.jpg')} style={styles.backgroundImage}>
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>Cyber Copias<Text style={styles.logoDot}>.</Text></Text>
            <TouchableOpacity onPress={() => router.push('/sign-in')}>
              <Text style={styles.navItem}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>

          {/* Home Section */}
          <View style={styles.home}>
            <Text style={styles.homeTitle}>CyberCopias</Text>
            <Text style={styles.homeSubtitle}>Gran variedad de materiales</Text>
            <Text style={styles.homeDescription}>
              Somos tu destino para materiales de papelería de calidad. Ofrecemos una amplia gama de productos, atención personalizada y un compromiso con la sostenibilidad. Tu papelería de confianza.
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => router.push('/sign-in')}>
              <Text style={styles.btnText}>Ver ahora</Text>
            </TouchableOpacity>
          </View>

          {/* Products Section */}
          <View style={styles.productsSection}>
            <Text style={styles.heading}>Lista <Text style={styles.highlight}>Productos</Text></Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {productsData.map((product, index) => (
                <View style={styles.box} key={index}>
                  <Image source={product.image} style={styles.productImage} />
                  <Text style={styles.productTitle}>{product.title}</Text>
                  <Text style={styles.price}>{product.price}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* About Section */}
          <View style={styles.aboutSection}>
            <Text style={styles.heading}><Text style={styles.highlight}>Sobre</Text> Nosotros</Text>
            <View style={styles.raw}>
              <View style={styles.videoContainer}>
                <Text>La mejor papelería</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.aboutTitle}>¿Por qué escogernos?</Text>
                <Text style={styles.aboutDescription}>
                  Nuestra papelería es la elección principal cuando se trata de comprar materiales de papelería. Nos enorgullece ofrecer una amplia gama de productos de alta calidad a precios competitivos. Nuestra atención al cliente es insuperable, brindando asesoramiento personalizado y un servicio rápido y eficiente. Además, estamos comprometidos con la sostenibilidad, promoviendo productos ecológicos.
                </Text>
              </View>
            </View>
          </View>

          {/* Map Section */}
          <Text style={styles.heading}>Donde <Text style={styles.highlight}>Encontrarnos</Text></Text>
          <View style={styles.map}>
            <Text>Mapa aquí</Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.footerBox}>
              <Text style={styles.footerTitle}>Enlaces rápidos</Text>
              <TouchableOpacity onPress={() => alert('Inicio')}>
                <Text style={styles.footerLink}>Inicio</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footerBox}>
              <Text style={styles.footerTitle}>Contáctanos</Text>
              <TouchableOpacity onPress={() => Linking.openURL('tel:3202164404')}>
                <Text style={styles.footerLink}>320 2164404</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('mailto:cibercopiascapital@hotmail.com')}>
                <Text style={styles.footerLink}>cibercopiascapital@hotmail.com</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>

      </ImageBackground>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

const productsData = [
  { image: require('../assets/prod-1.png'), title: 'Cuaderno tapa dura', price: '$12.99' },
  { image: require('../assets/prod-2.png'), title: 'Lapiz H2', price: '$12.99' },
  { image: require('../assets/prod-3.png'), title: 'Saca puntas', price: '$12.99' },
];

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,  // Para que la imagen ocupe toda la pantalla
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,  // Baja la barra de navegación
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoDot: {
    fontSize: 24,
    color: '#D2A857',
  },
  navItem: {
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 15,
  },
  home: {
    alignItems: 'center',
    marginVertical: 20,
  },
  homeTitle: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  homeSubtitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  homeDescription: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#D2A857',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productsSection: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  highlight: {
    color: '#D2A857',
  },
  box: {
    width: 150,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 16,
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D2A857',
  },
  aboutSection: {
    marginBottom: 20,
  },
  raw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  videoContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutDescription: {
    fontSize: 16,
    textAlign: 'justify',
  },
  map: {
    height: 350,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerBox: {
    width: '30%',
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerLink: {
    fontSize: 16,
    marginVertical: 5,
  },
});
