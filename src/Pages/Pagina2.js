import React, { useState } from 'react';
import { Text, View,StyleSheet } from 'react-native';


export function Pagina2(){
    return(
        <View style={ styles.container}>
            <View style={styles.containerif}><Text style={styles.letrabranca}>Últimas notícias</Text></View>
            <View style={ styles.containerletras}><Text>--------------- PROCESSO SELETIVO ---------------</Text><Text>      Divulgado resultado parcial para seleção de cadastro reserva no Pibid </Text></View>
            <View style={ styles.containerletras}><Text>--------------- EMPREENDEDORISMO ---------------</Text><Text>      IFRN seleciona bolsistas para Incubadora de Tecnologia </Text></View>
            <View style={ styles.containerletras}><Text>--------------- CONSUP ---------------</Text><Text>      Eleição do Conselho Superior chega a resultado final </Text></View>

            
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
