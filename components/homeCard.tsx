import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { BlurView } from 'expo-blur';
import { fetchWikiSummary } from '@/utils/wikipedia';

const colors = [
  'rgba(107, 114, 128, 1)', 
  'rgba(42, 157, 143, 1)',  
  'rgba(142, 108, 136, 1)',
  'rgba(82, 121, 111, 1)', 
  'rgba(169, 113, 113, 1)', 
  'rgba(55, 65, 81, 1)',   
  'rgba(75, 94, 170, 1)', 
  'rgba(160, 82, 45, 1)',   
];

export const HomeCard = ({
  title,
}: {
  title: string;
}) => {
  const [randomColor, setRandomColor] = useState('rgba(0,0,0,0.3)');
  
  const [summary, setSummary] = useState<any>(null);
  const [imageUrl, setImageUrl] =  useState<string>('');
  const [readMoreUrl, setReadMoreUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWikiSummary(title);
      setSummary(data?.extract);
      setImageUrl(data?.thumbnail?.source);
      setReadMoreUrl(data?.content_urls?.mobile?.page);
    }

    fetchData();
  }, [])

  useEffect(() => {
    const generateRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    setRandomColor(generateRandomColor());
  }, [imageUrl]);

  const handlePress = async () => {
    if (readMoreUrl) {
      await WebBrowser.openBrowserAsync(readMoreUrl);
    }
  }

  return (
    <View className='w-full h-full'
    style={{ backgroundColor: randomColor }}>
        <Image 
          source={{ uri: imageUrl || undefined }} 
          style={{ width: "100%", height: "100%" }}
          className='absolute z-1 top-0 left-0'
          resizeMode='cover'/>
      
        <View 
          style={{ 
            height: "100%",
            width: "100%",
            backgroundColor: randomColor,
          }} 
          className='absolute z-2 top-0 left-0 opacity-60'
        />

        <View className='h-full w-full 
          justify-center items-center'>
          <View className='m-8 rounded-3xl'>
            <BlurView 
              intensity={70} 
              tint="dark" 
              className="rounded-3xl overflow-hidden
              px-5 py-8"
              >
              <Text className='text-4xl font-bold mb-5 text-white'>
                {title}
              </Text>
              
              <Text className='text-white font-medium mb-5 leading-relaxed'>
                {summary}
              </Text>

              <TouchableOpacity 
                onPress={handlePress}
                style={{ backgroundColor: `${randomColor}90` }}
                className='px-5 py-3 rounded-full self-start'>
                <Text className='text-white font-bold'>
                  Read More
                </Text>
              </TouchableOpacity>
            </BlurView>
          </View>
        </View>
    </View>
  );
};
