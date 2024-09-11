import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { createUser } from '../../lib/appwrite';  // Importa la función de creación de usuario

const { width } = Dimensions.get('window'); // Obtener el ancho de la pantalla

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    usuario: '',
    contraseña: '',
  });

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async () => {
    const { email, usuario, contraseña } = form;

    if (!email || !usuario || !contraseña) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Pasar solo los campos necesarios a la función createUser
      const newUser = await createUser(email, contraseña, usuario);

      if (newUser) {
        Alert.alert("Registro Exitoso", "El usuario ha sido registrado correctamente.");
        router.replace('/sign-in');  // Redirigir al inicio de sesión tras registro exitoso
      }
    } catch (error) {
      console.error('Error durante el registro:', error.message);
      Alert.alert("Error", error.message);  // Muestra el error si algo sale mal
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.logo}>Cybercopias</Text>
      </View>

      <View style={styles.container}>
        <Image
          source={require('../../assets/images/blog_papelarte_abril.jpeg')} // Reemplaza con la ruta a tu imagen
          style={styles.image}
        />
        <Text style={styles.title}>Bienvenido a CyberCopias</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={form.usuario}
            onChangeText={(value) => setForm({ ...form, usuario: value })}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={form.contraseña}
            secureTextEntry
            onChangeText={(value) => setForm({ ...form, contraseña: value })}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={isSubmitting}>
            <Text style={styles.buttonText}>
              {isSubmitting ? 'Registrando...' : 'Registrarse'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/sign-in')}>
            <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    marginRight: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#007bff',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111418',
  },
  container: {
    flex: 1, // Ocupa todo el espacio disponible debajo del header
    padding: 0, // Elimina el relleno para aprovechar todo el espacio
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  image: {
    width: width, // Ocupa todo el ancho de la pantalla
    height: 200, // Ajusta la altura según tus necesidades
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20, // Aumenta el margen superior para separar del título de la imagen
    marginBottom: 20, // Reduce el margen para acercar el título al formulario
    textAlign: 'center',
    color: '#333',
  },
  formContainer: {
    width: '90%', // Ajusta el ancho del contenedor del formulario
    maxWidth: 500, // Aumenta el ancho máximo del formulario
    paddingHorizontal: 20, // Agrega espaciado horizontal dentro del contenedor
    marginBottom: 20, // Reduce el margen inferior para acercar el formulario al footer
    alignItems: 'center', // Centra el formulario horizontalmente
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%', // Ocupa todo el ancho disponible
  },
  button: {
    backgroundColor: '#007bff', // Azul
    padding: 16, // Aumenta el padding para hacer el botón más ancho
    borderRadius: 25, // Botón más ovalado
    alignItems: 'center',
    width: '100%', // Ocupa todo el ancho disponible
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    textAlign: 'center',
    color: '#007bff', // Azul
    fontSize: 16,
  },
  footer: {
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
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

export default SignUp;
