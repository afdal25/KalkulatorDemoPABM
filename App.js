// App.js
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Calculator from './src/components/Calculator';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* edges memastikan area aman di atas (poni HP) dan bawah (tombol home bar) */}
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }} edges={['top', 'bottom']}>
        <StatusBar barStyle="light-content" />
        <Calculator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}