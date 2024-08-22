import { View, Text, Alert, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from "../../constants";

import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";
import { Link, useRouter } from 'expo-router';  // Asegurándote de importar useRouter
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const router = useRouter();  // Asegurándote de inicializar el router correctamente

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;  // Agregando return para detener la ejecución si hay campos vacíos
    }

    setSubmitting(true);
    try {
      // Creando el usuario con los campos permitidos (sin avatarUrl)
      const result = await createUser(form.email, form.password, form.username);
      
      // Aquí podrías setear el usuario y redirigir a /home si todo va bien
      setUser(result);
      setIsLogged(true);

      // Redirigir al usuario al home
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]" 
          />
          
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign up to Aora Adso
          </Text>

          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"  // Corregir typo en keyboardType
          />
          
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"  
          />
          
          <CustomButton 
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
