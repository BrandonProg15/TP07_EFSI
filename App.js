import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native'; // Importamos componentes básicos
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './src/Inicio';

const Stack = createStackNavigator();

export default function App() {
  const [estaCargando, setEstaCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEstaCargando(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (estaCargando) {
    return (
      <View style={{ 
        flex: 1, 
        backgroundColor: '#ffffff', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <Image 
          source={require('./assets/logoOrt.png')} 
          style={{ width: 250, height: 250 }} 
          resizeMode="contain"
        />
    
        <ActivityIndicator size="large" color="#2a20bd" style={{ marginTop: 20 }} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
