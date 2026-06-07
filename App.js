import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native'; // Importamos componentes básicos
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './src/Inicio';

const Stack = createStackNavigator();

export default function App() {
  const [estaCargando, setEstaCargando] = useState(true);

  useEffect(() => {
    // Esto hará que la imagen se vea por 3 segundos en la web
    const timer = setTimeout(() => {
      setEstaCargando(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // ESTA ES TU PANTALLA DE CARGA PARA WEB Y MÓVIL
  if (estaCargando) {
    return (
      <View style={{ 
        flex: 1, 
        backgroundColor: '#ffffff', // El fondo oscuro que elegiste
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <Image 
          source={require('./assets/logoOrt.png')} 
          style={{ width: 250, height: 250 }} 
          resizeMode="contain"
        />
        {/* Agregamos un circulito de carga para que el usuario sepa que está pasando algo */}
        <ActivityIndicator size="large" color="#2a20bd" style={{ marginTop: 20 }} />
      </View>
    );
  }

  // CUANDO TERMINA DE CARGAR, MUESTRA LA NAVEGACIÓN
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
