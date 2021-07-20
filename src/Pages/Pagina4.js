import React, { useState } from 'react';
import { Text, View,StyleSheet } from 'react-native';


export function Pagina4(){
    return(
        <View style={ styles.container}>
            <View style={styles.containerif}><Text style={styles.letrabranca}>Biblioteca</Text></View>
            <View style={ styles.containerletras}><Text>--------------- Biblioteca ---------------</Text><Text>      A Biblioteca Paulo Freire tem como objetivos ser uma Unidade Informacional capaz de dar apoio ao ensino, à pesquisa e extensão disponibilizando o acesso à informação em suporte bibliográfico, virtual e digital; contribuir no processo de ensino-aprendizagem bem como cumprir sua função social de adquirir, organizar e disseminar a informação junto à comunidade interna e externa. </Text></View>

            
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    containerletras:{
        marginBottom: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    containerif: {
        backgroundColor: '#9d4',
        width: 2000,
        height: 90,
        marginBottom: 20,
        justifyContent: 'center',
      },
    letrapreta: {
        fontSize: 20,
        textAlign: 'center',
        color: '#111',
    },
    letrabranca: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
    },
});
