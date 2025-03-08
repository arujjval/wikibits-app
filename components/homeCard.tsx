import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { BlurView } from 'expo-blur';

export const HomeCard = ({
  title,
  summary,
  imageUrl,
  readMoreUrl
}: {
  title: string;
  summary: string;
  imageUrl: string | null;
  readMoreUrl: string | null;
}) => {

  const handlePress = async () => {
    if (readMoreUrl) {
      await WebBrowser.openBrowserAsync(readMoreUrl);
    }
  }

  return (
    <View className='w-full h-full'>
      <Image 
        source={{ uri: imageUrl || undefined }} 
        style={{ width: "100%", height: "50%" }}
        className='absolute z-1 top-0 left-0'
        resizeMode='cover'/>

        <View className='h-full w-full justify-end'>
          <BlurView 
            intensity={55} 
            tint="dark" >
            <View className={`px-7 pb-24 pt-12`}>
              <Text className='text-4xl font-bold mb-5 text-white'>
                {title}
              </Text>
              
              
                <Text className='text-white font-medium mb-5 leading-relaxed'>
                  {summary}
                </Text>
              

              <TouchableOpacity 
                onPress={handlePress}
                className='bg-gray-600/40 px-5 py-3 rounded-full self-start'>
                <Text className='text-white font-bold'>
                  Read More
                </Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
    </View>
  );
};
