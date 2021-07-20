import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes'; 
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import GlobalStyles from './src/styles/GlobalStyles';


export default function App() {
  return (

    <NavigationContainer>
      <StatusBar style='dark'/>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
          <Routes/>
      </SafeAreaView>
    </NavigationContainer>
  );
}


