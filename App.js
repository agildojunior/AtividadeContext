import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes'; 
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import GlobalStyles from './src/styles/GlobalStyles';
import { SimplesProvider } from './contexts/SimplesProvider';


export default function App() {
  return (

  <SimplesProvider>
    <NavigationContainer>
      <StatusBar style='dark'/>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
          <Routes/>
      </SafeAreaView>
    </NavigationContainer>
  </SimplesProvider>
  );
}
