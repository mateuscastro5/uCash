import { Image, StyleSheet, Platform, ViewComponent, Button, StatusBar } from 'react-native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton, Box } from '../components/index.tsx';

export default function HomeScreen() {
  return (
    <View className='flex-1'>
        <SafeAreaView className='flex-1 px-1 justify-between mx-5'>
            <View>
                <Text className='text-center font-bold text-4xl mt-8'>Calculadora Salarial</Text>
            </View>
            
            <View className='border'>
                <Box />
            </View>

            <View className="mb-6">
                <CustomButton onPress={() => console.log(`tap`)} title="calcular" />
            </View>
            <StatusBar style="light" />
        </SafeAreaView>
    </View>

)};
