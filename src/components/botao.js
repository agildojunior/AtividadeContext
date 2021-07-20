import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DefaultStyles from '../styles/GlobalStyles';

export function MainButton ({ title, buttonColor, onPress }){

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={DefaultStyles.button} backgroundColor='#6a1'>
        <Text style={DefaultStyles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
};