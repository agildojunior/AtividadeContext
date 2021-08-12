import { View, Text, TouchableOpacity } from 'react-native';
import DefaultStyles from '../styles/GlobalStyles';
import React, { useContext } from 'react';
import SimplesContext from '../../contexts/SimplesProvider';

export function MainButton ({ title, buttonColor, onPress }){
  const {user} = useContext(SimplesContext);
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={DefaultStyles.button} backgroundColor='#6a1'>
        <Text style={DefaultStyles.buttonText}>{title}</Text>
        <Text> {user} </Text>
      </View>
    </TouchableOpacity>
  )
};