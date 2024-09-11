import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Animated, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

const categories = [
  { name: "Cuadernos", image: require('../assets/images/cuaderno.jpg') },
  { name: "Arte", image: require('../assets/images/Arte.jpg') },
  { name: "Accesorios", image: require('../assets/images/accesorios.jpg') },
  // Agrega más categorías según sea necesario
];

const specialCategories = [
  { name: "Papel", image: require('../assets/images/blog_papelarte_abril.jpeg') },
  { name: "Coleccionables", image: require('../assets/images/coleccionables.jpg') },
  { name: "Escritura", image: require('../assets/images/escritura.jpg') },
  // Agrega más categorías especiales según sea necesario
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
        {/* Imagen de fondo "New Arrivals" */}
        <ImageBackground source={require('../assets/images/escritura.jpg')} style={styles.banner}>
          <View style={styles.overlay}>
            <Text style={styles.bannerTitle}>Nuevas llegadas</Text>
            <Text style={styles.bannerSubtitle}>
            Compre lo último en papelería de nuestras marcas favoritas.
            </Text>
          </View>
        </ImageBackground>

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

        {/* Nuevas Categorías */}
        <View style={styles.specialCategoriesSection}>
          <Text style={styles.heading}>Nuevas Categorías</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {specialCategories.map((category, index) => (
              <View key={index} style={styles.specialCategoryCard}>
                <Image source={category.image} style={styles.specialCategoryImage} />
                <Text style={styles.specialCategoryName}>{category.name}</Text>
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
    paddingVertical: 16,
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
  },
  signInButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  banner: {
    width: '100%',
    height: 350, // Aumenta la altura del banner
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Reduce el espacio debajo del banner
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Oscurece un poco el fondo para el texto
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  categoriesSection: {
    marginBottom: 20,
    marginTop: 10, // Reduce el espacio superior debajo del banner
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
    color: '#111418',
    marginTop: 8,
  },
  specialCategoriesSection: {
    marginBottom: 20,
  },
  specialCategoryCard: {
    width: 150,
    marginRight: 10,
    alignItems: 'center',
  },
  specialCategoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  specialCategoryName: {
    fontSize: 16,
    color: '#111418',
    marginTop: 8,
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
    marginHorizontal: 10,
    color: '#007bff',
  },
  footerText: {
    fontSize: 14,
    color: '#111418',
  },
});
