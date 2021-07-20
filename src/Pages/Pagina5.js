import React, { useState } from 'react';
import { Text, View,StyleSheet } from 'react-native';


export function Pagina5(){
    return(
        <View style={ styles.container}>
            <View style={styles.containerif}><Text style={styles.letrabranca}>Bolsas</Text></View>
            <View style={ styles.containerletras}><Text>--------------- Bolsas ---------------</Text><Text>      A Pró-Reitoria de Pesquisa e Inovação (Propi) do IFRN tornou público nesta sexta-feira (16),  os Editais nº 16, 17, 18 e 19, referentes à concessão de bolsas de pesquisa através dos Programas Interinstitucionais de Bolsas de Iniciação Científica (CNPq). Os três primeiros são para a submissão de projetos de pesquisa e/ou inovação no âmbito da Iniciação Científica (Pibic; Pibic-AF), que contempla os candidatos provenientes de ações afirmativas; e o Pibic-EM (destinado a estudantes do Ensino Médio). Já o último é para bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação (Pibiti). Os trabalhos devem ser submetidos no período de 14 de julho até 09 de agosto.   </Text></View>

            
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
