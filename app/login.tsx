import { Google, loginCover, Logo } from '@/assets/images';
import { googleAuth } from '@/utils/google-auth';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const login = () => {
  return (
    <SafeAreaProvider>
      <View className='w-screen h-full'>
        <Image 
          source={loginCover} 
          className='w-full h-full 
            absolute top-0 left-0 z-0'
          resizeMode='cover'
        />

        <View className='w-full h-full
          flex justify-center items-center bg-gray-700/30'>
            <View className='h-1/3 max-w-[400px] w-4/5 gap-10
              rounded-3xl flex justify-center items-center'>
                <Image 
                  source={Logo} 
                  className='size-44'/>

                  <TouchableOpacity
                    className='flex-row bg-gray-100/60 w-80 py-2
                    justify-center items-center rounded-full gap-5'
                    onPress={googleAuth}>
                    <Image 
                      source={Google} 
                      className='size-8' />
                    <Text className='font-medium'>
                      Sign in with Google
                    </Text>
                  </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default login;
