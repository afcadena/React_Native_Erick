import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

const categories = [
  { name: "Cuadernos", image: require('../assets/images/cuaderno.jpg') },
  { name: "Arte", image: require('../assets/images/Arte.jpg') },
  { name: "Accesorios", image: require('../assets/images/accesorios.jpg') },
  // Agrega más categorías según sea necesario
];

export default function HomePage() {
  const router = useRouter();
  const [headerVisible, setHeaderVisible] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        setHeaderVisible(currentOffset < 100); // Ajusta el valor según sea necesario
      },
    }
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Oculta la barra de estado */}
      <StatusBar hidden={true} />
      <Animated.View style={[styles.header, { transform: [{ translateY: headerVisible ? 0 : -100 }] }]}>
        <Text style={styles.logo}>Cybercopias</Text>
        <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/sign-in')}>
          <Text style={styles.signInButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </Animated.View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroText}>Ofertas Exclusivas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
            {[1, 2, 3].map((_, index) => (
              <View key={index} style={styles.carouselItem}>
                <Text style={styles.carouselText}>Oferta {index + 1}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Categorías */}
        <View style={styles.categoriesSection}>
          <Text style={styles.heading}>Nuestras Categorías</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} onPress={() => router.push(`/category/${category.name.toLowerCase()}`)}>
                <View style={styles.categoryCard}>
                  <Image source={category.image} style={styles.categoryImage} />
                  <Text style={styles.categoryName}>{category.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Categoría Destacada */}
        <View style={styles.featuredCategory}>
          <View style={styles.featuredHeader}>
            <Text style={styles.featuredTitle}>TECNOLOGÍA</Text>
            <TouchableOpacity onPress={() => router.push('/technology')}>
              <Text style={styles.featuredLink}>Ver todo</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <View key={index} style={styles.productCard}>
                <View style={styles.productImagePlaceholder}></View>
                <Text style={styles.productTitle}>Producto {index + 1}</Text>
                <Text style={styles.productPrice}>$199.900</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => console.log('Agregar al carrito')}>
                  <Text style={styles.addButtonText}>Agregar al carrito</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.socialLinks}>
            <TouchableOpacity onPress={() => console.log('Instagram')}>
              <Text style={styles.socialIcon}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Facebook')}>
              <Text style={styles.socialIcon}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Twitter')}>
              <Text style={styles.socialIcon}>Twitter</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>@2024 Cybercopias. Todos los Derechos Reservados</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 16, // Ajusta este valor para mover el header hacia abajo
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    zIndex: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111418',
  },
  signInButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  signInButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  heroSection: {
    marginBottom: 20,
    marginTop: 80, // Ajusta esto si es necesario para que el contenido no se superponga con el header
  },
  heroText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111418',
  },
  carousel: {
    flexDirection: 'row',
  },
  carouselItem: {
    width: 300,
    height: 150,
    backgroundColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  carouselText: {
    fontSize: 20,
  },
  categoriesSection: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111418',
  },
  categoryCard: {
    width: 120,
    marginRight: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#111418',
    marginTop: 8,
  },
  featuredCategory: {
    marginBottom: 20,
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111418',
  },
  featuredLink: {
    fontSize: 16,
    color: '#007bff',
  },
  productCard: {
    width: 150,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  productImagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111418',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    color: '#111418',
    marginTop: 4,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  socialIcon: {
    fontSize: 16,
    color: '#637588',
    marginHorizontal: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#637588',
  },
});
