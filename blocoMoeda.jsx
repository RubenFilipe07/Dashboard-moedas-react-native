import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export  function BlocoMoeda(props) {
  
  return (
        <View style={styles.bloco}>
            <View style={styles.blocoSimbolo}>
                <View style={[styles.blocoSimboloMoeda, {backgroundColor: props.corFundo}]}>
                    <Text style={[styles.simboloMoeda, {color: props.corSimbolo}]}>{props.simbolo}</Text>
                </View>

                <View style={styles.blocoMoeda}>
                    <Text style={styles.tituloMoeda}>{props.titulo}</Text>
                    <Text style={styles.valorMoeda}>R$ {props.moeda}</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    bloco: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      height: '10%',
      borderBottomWidth: 1,
      borderBottomColor: '#303336',
    },
    blocoSimbolo: {
      flexDirection: 'row',
      display: 'flex',
    },
    blocoMoeda: {
      flexDirection: 'column',
      display: 'flex',
      marginLeft: 10,
      marginRight: 10,
      padding: 0,
      marginTop: 0,
      marginBottom: 0,
    },
    blocoSimboloMoeda: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    simboloMoeda: {
      fontSize: 30,
      fontWeight: '600',
    },
    tituloMoeda: {
      fontSize: 30,
      marginTop: -8,
      color: '#efefef',
    }
    ,
    valorMoeda: {
      fontSize: 20,
      color: '#c2cdd3',
    },
  });
  
