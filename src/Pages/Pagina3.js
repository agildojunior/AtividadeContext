import React, { useState } from 'react';
import { Text, View,StyleSheet } from 'react-native';

export function Pagina3(){
    return(
        <View style={ styles.container}>
            <View style={styles.containerif}><Text style={styles.letrabranca}>CURSOS</Text></View>
            <View style={ styles.containerletras}><Text>--------------- TADS ---------------</Text><Text>      O curso de Análise e Desenvolvimento de Sistemas (TADS) proporciona aulas em laboratórios atualizados com ferramentas de análise, projeto e desenvolvimento de sistemas, possibilitando ao aluno o contato com a prática desde cedo.</Text></View>
            <View style={ styles.containerletras}><Text>--------------- Quimica ---------------</Text><Text>     O curso de Química forma profissionais que investigam, realizam experiências e análises relacionadas a propriedades, composição e transformações das substâncias quando sofrem alterações de temperatura e pressão ou quando se misturam a elementos químicos.</Text></View>
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
