import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { BlocoMoeda } from './blocoMoeda';

export default function App() {

  const [dolar, setDolar] = useState();
  const [euro, setEuro] = useState();
  const [libra, setLibra] = useState();
  const [iene, setIene] = useState();
  const [dolarAustraliano, setDolarAustraliano] = useState();
  const [francoSuico, setFrancoSuico] = useState();
  const [dolarCanadense, setDolarCanadense] = useState();
  const [yuan, setYuan] = useState();
  const [pesoArgentino, setPesoArgentino] = useState();
  const [show, setShow] = useState(null);

  const getMonetary = () => {
    setShow(null);
    axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,AUD-BRL,CHF-BRL,CAD-BRL,CNY-BRL,ARS-BRL')
      .then(res => {
        handlerMonetary(res.data);
      }).catch(err => {
        console.log(err)
        setShow(false);
      });
  }

  useEffect(() => {
    getMonetary();
  }, []);

  const handlerMonetary = (data) => {
    setDolar(parseFloat(data.USDBRL.bid).toFixed(2));
    setEuro(parseFloat(data.EURBRL.bid).toFixed(2));
    setLibra(parseFloat(data.GBPBRL.bid).toFixed(2));
    setIene(parseFloat(data.JPYBRL.bid).toFixed(2));
    setDolarAustraliano(parseFloat(data.AUDBRL.bid).toFixed(2));
    setFrancoSuico(parseFloat(data.CHFBRL.bid).toFixed(2));
    setDolarCanadense(parseFloat(data.CADBRL.bid).toFixed(2));
    setYuan(parseFloat(data.CNYBRL.bid).toFixed(2));
    setPesoArgentino(parseFloat(data.ARSBRL.bid).toFixed(2));
    setShow(true);
  }

  return (
  <View style={styles.container}>  
      {show ? (
        <Fragment>
          <BlocoMoeda simbolo={'$'} titulo='Dólar' moeda={dolar} corFundo="#e8e7d0" corSimbolo="#13391a" />
          <BlocoMoeda simbolo={'€'} titulo='Euro' moeda={euro} corFundo="#CAADCC" corSimbolo="#533F75" />
          <BlocoMoeda simbolo={'£'} titulo='Libra' moeda={libra} corFundo="#F1E5CF" corSimbolo="#C61635" />
          <BlocoMoeda simbolo={'¥'} titulo='Iene' moeda={iene} corFundo="#E2CAB2" corSimbolo="#45434C" />
          <BlocoMoeda simbolo={'A$'} titulo='Dólar Australiano' moeda={dolarAustraliano} corFundo="#76CBA0" corSimbolo="#006482" />
          <BlocoMoeda simbolo={'Fr'} titulo='Franco Suíco' moeda={francoSuico} corFundo="#AFA2CD" corSimbolo="#7E5596" />
          <BlocoMoeda simbolo={'C$'} titulo='Dólar Canadense' moeda={dolarCanadense} corFundo="#7EA785" corSimbolo="#365946" />
          <BlocoMoeda simbolo={'¥'} titulo='Remibi (Yuan)' moeda={yuan} corFundo="#D5C7C6" corSimbolo="#C88177" />
          <BlocoMoeda simbolo={'$'} titulo='Peso Argentino' moeda={pesoArgentino} corFundo="#4A4680" corSimbolo="#C5D8E7" />
        </Fragment>) 
        : (
        <Fragment>
          {show === null ? (
          <Image style={styles.loading} source={require('./assets/loading.gif')}/>) 
          :  (<><Text style={styles.errorMessage}>Não foi possível carregar os dados 😕</Text>
              <Button onPress={getMonetary} title="Tentar novamente" />
              </>) }
        </Fragment>
        )}
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21262d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  errorMessage:{
    color: '#fff',
    marginBottom: 30,
    fontSize: 18,
  },
  loading : {
    width: 100,
    height: 100,
  },
});
