import { InterestBg } from '@/assets/images';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {
  return (
   <View className='pt-20'>
    <Link href={"/(root)/pages/interests"}>Link</Link>
   </View>
  );
}


