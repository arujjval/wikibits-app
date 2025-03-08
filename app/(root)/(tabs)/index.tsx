import { View, Text, ScrollView, FlatList, Dimensions } from 'react-native';
import { Search } from 'lucide-react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchWikiSummary } from '@/utils/wikipedia';
import React, { useEffect, useState } from 'react';
import { HomeCard } from '@/components/homeCard';


export default function HomeScreen() {
  const { height } = Dimensions.get("window");

  const [summary, setSummary] = useState<any>(null);
  const [title, setTitle] = useState<string>('React Native');
  const [imageUrl, setImageUrl] =  useState<string>('https://thumbs.dreamstime.com/b/mobile-phone-wallpaper-soft-focus-delicate-flower-amidst-blurred-orange-meadow-sunset-354016436.jpg');
  const [readMoreUrl, setReadMoreUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWikiSummary('React Native');
      setSummary(data?.extract);
      //setImageUrl(data?.thumbnail?.source);
      setTitle(data?.title);
      setReadMoreUrl(data?.content_urls?.mobile?.page);
    }

    fetchData();
  }, [])

  return (
      <View className='w-full h-full bg-gray-200'>
        <FlatList
          data={[1, 2, 3]} 
          pagingEnabled
          showsVerticalScrollIndicator={false}
          className='flex flex-col'
          snapToInterval={height + 75} //Potential issue
          decelerationRate="fast" 
          renderItem={() => (
            // potential issue
            <View style={{ height: height + 75 }} className='w-full'> 
                <HomeCard 
                  title={title} 
                  summary={summary} 
                  imageUrl={imageUrl}
                  readMoreUrl={readMoreUrl}
                />
            </View>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
  );
}

