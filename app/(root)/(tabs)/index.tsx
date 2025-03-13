import { View, Text, ScrollView, FlatList, Dimensions } from 'react-native';
import { Search } from 'lucide-react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchWikiSummary } from '@/utils/wikipedia';
import React, { useEffect, useState } from 'react';
import { HomeCard } from '@/components/homeCard';

const topics = [
  'Quantum Mechanics',
  'Napolean Bonaparte',
  'Battle of Waterloo',
  'The Great Gatsby',
  'Photosynthesis',
  'Machu Picchu',
  'Black Hole',
  'Frida Kahlo',
  'Periodic Table',
  'Suez Canal',
  'Tango',
];

export default function HomeScreen() {
  const { height } = Dimensions.get("window");

  const [summary, setSummary] = useState<any>(null);
  const [title, setTitle] = useState<string>('React Native');
  const [imageUrl, setImageUrl] =  useState<string>('');
  const [readMoreUrl, setReadMoreUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWikiSummary('Fu-Go balloon bomb');
      setSummary(data?.extract);
      setImageUrl(data?.thumbnail?.source);
      setTitle(data?.title);
      setReadMoreUrl(data?.content_urls?.mobile?.page);
    }

    fetchData();
  }, [])

  return (
      <View className='w-full h-full bg-gray-200'>
        <FlatList
          data={topics} 
          pagingEnabled
          showsVerticalScrollIndicator={false}
          className='flex flex-col'
          snapToInterval={height + 75} //Potential issue
          decelerationRate="fast" 
          renderItem={(data) => (
            // potential issue
            <View style={{ height: height + 75 }} className='w-full'> 
                <HomeCard 
                  title={data.item} 
                />
            </View>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
  );
}

