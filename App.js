import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInformation from './src/screens/CoursesInformation';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';
import ColorChangeScreen from './src/screens/ColorChangeScreen';
import PasswordScreen from './src/screens/PasswordScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
      <Stack.Screen name="Kurslarım" component={CoursesScreen} />
      <Stack.Screen name="Kurs Bilgilerim" component={CoursesInformation} />
      <Stack.Screen name="Sayaç Uygulaması" component={CounterScreen} />
      <Stack.Screen name="Kutu Uygulaması" component={BoxScreen} />
      <Stack.Screen name="Renk Değiştirme Uygulaması" component={ColorChangeScreen} />
      <Stack.Screen name="Şifre Ekranı" component={PasswordScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
