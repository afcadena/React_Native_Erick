import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

import {images} from "../../constants"

import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton"
import { Link } from 'expo-router';

const SignIn = () => {

  const [form, setform] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)


  const submit = () =>{

  }


  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>

      <View className="w-full justify-centern min-h-[85vh] px-4 my-6">

      <Image  source={images.logo}
      resizeMode='contain'
      className="w-[115px] h-[35px]" 
      
      />
      
      <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora Adso</Text>


      <FormField 
      title="Email"
      value={form.email}
      handleChangeText={(e) => setForm({...form,
      email: e})}
      otherStyles="mt-7"
      keyboarTyoe="email-address"

      />
      <FormField 
      title="Password"
      value={form.password}
      handleChangeText={(e) => setForm({...form,
      password: e})}
      otherStyles="mt-7"  
      />
      

      <CustomButton 
      title="Sign in"
      handlePress={submit}
      containerStyles="mt-7"
      isLoading={isSubmitting}
      />

      <View clasName="justify-center pt-5  flex-row gap-2">

        <Text className="text-lg text-gay-100 font-pregular">
          Don´t have an account
        </Text>
          
        <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
        Sign Up
        </Link>

      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn