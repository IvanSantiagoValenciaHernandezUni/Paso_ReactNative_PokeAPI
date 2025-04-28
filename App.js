import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Aleatorios from './src/Componentes/Aleatorios';
import Capturados from './src/Componentes/Capturados';
import Favoritos from './src/Componentes/Favoritos';
import Lista from './src/Componentes/Lista';
import Usuarios from './src/Componentes/Usuarios';
import Pokemon from './src/Componentes/Pokemon';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista />
      <Aleatorios />
      <Capturados />
      <Favoritos />
      <Usuarios />
      <Pokemon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

