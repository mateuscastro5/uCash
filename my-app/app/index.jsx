import { Image, StyleSheet, Platform, ViewComponent, Button, StatusBar } from 'react-native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Signup, Welcome } from '../components/index';
import HomeScreen from '../src/screen/HomeScreen';

const Stack = createNativeStackNavigator();


const App = () => {
    return (
    
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>  
        </NavigationContainer>
    )
}

export default App;