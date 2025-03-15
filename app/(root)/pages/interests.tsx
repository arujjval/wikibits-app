import { InterestBg } from '@/assets/images';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Interests() {
  const [inputValue, setInputValue] = useState('');

  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <View className='w-full h-full'>
      <Image 
      source={InterestBg} 
      className='
        w-full h-full 
        absolute top-0 left-0'
      resizeMode='cover'/>

      <View className='w-full h-full justify-center'>
        <View className='m-10 py-10 px-5 gap-10
             bg-slate-800/50 rounded-2xl'>
            <Text className='text-white font-semibold text-3xl'>
                What interests you?
            </Text>

            <TextInput
                value={inputValue}
                onChangeText={setInputValue}
                className='text-gray-200 h-12 rounded-full
                 justify-center items-center px-5
                 bg-gray-700/80 w-full'
                placeholder='Space, Japan, Football, ...'
                placeholderTextColor='#6B7280'
            />

            <TouchableOpacity
             onPress={handlePress}
             className='border border-gray-500 rounded-full
                h-12 justify-center items-center'
             >
                <Text className='w-full text-center
                     text-white font-medium'>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
