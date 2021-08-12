import { Text, View , StyleSheet } from 'react-native';
import { MainButton } from '../components/botao';
import React, { useContext } from 'react';
import SimplesContext from '../../contexts/SimplesProvider';

export function Home( { navigation} ){
    const {user} = useContext(SimplesContext);

    return(

        <View style={ styles.container}>
            <View style={styles.containerif}><Text style={styles.letrabranca}>IFRN</Text></View>

            <Text> {user} </Text>

            <MainButton title="Sobre o Campus" onPress={() => navigation.navigate('Pagina1')} />
            <MainButton title="Últimas notícias" onPress={() => navigation.navigate('Pagina2')} />
            <MainButton title="Biblioteca" onPress={() => navigation.navigate('Pagina4')} />
            <MainButton title="Bolsas" onPress={() => navigation.navigate('Pagina5')} />
            <MainButton title="Cursos" onPress={() => navigation.navigate('Pagina3')} />

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
    botao: {
        backgroundColor: '#ccc',
        width: 260,
        height: 60,
        marginTop: 40,
        justifyContent: 'center',
        borderRadius: 10,
    },
    letrabranca2: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
    },
});

