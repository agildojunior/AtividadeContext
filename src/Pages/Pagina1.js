import React, { useContext } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import SimplesContext from '../../contexts/SimplesProvider';

export function Pagina1(){
    const {user} = useContext(SimplesContext);
    return(
        
        <View style={ styles.container}>
            <View style={styles.containerif}><Text style={styles.letrabranca}>Sobre o Campus</Text></View>
            <View style={ styles.containerletras}><Text>--------------- IFRN PAU DOS FERROS ---------------</Text><Text>      O Campus Pau dos Ferros - IFRN oferece cursos de educação superior, pós-graduação e educação profissional técnica de nível médio.</Text></View>
            <Text> {user} </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
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
    containerletras:{
        marginBottom: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
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
