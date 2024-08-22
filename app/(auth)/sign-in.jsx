import { View, Text, Image, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";
import { Link, router } from 'expo-router';
import { signIn, checkSession } from '../../lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Verificar si ya hay una sesión activa al iniciar el componente
  useEffect(() => {
    const verifySession = async () => {
      try {
        const hasSession = await checkSession();
        console.log('Has session:', hasSession); // Verificar si hay una sesión activa
        if (hasSession) {
          console.log('Session already active, redirecting to /home');
          router.replace('/home'); // Redirigir si ya hay una sesión activa
        }
      } catch (error) {
        console.error('Error checking session:', error.message);
      }
    };
    verifySession();
  }, []);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    setIsSubmitting(true);
    try {
      console.log('Attempting to sign in with email:', form.email);
      
      const session = await signIn(form.email, form.password);
      console.log('Session created:', session);

      // Redirigir a la página de inicio después de iniciar sesión
      router.replace('/home');
      console.log('Redirecting to /home');
    } catch (error) {
      console.error('Error during signIn:', error.message);
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora Adso</Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry
          />
          <CustomButton 
            title="Sign in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
