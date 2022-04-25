/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';
//Calculadora
export const CalculadoraScreen = () => {
  //usealculadora
  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    armarNumero,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();
  //función calcular
  return (
    <View style={styles.calculadoraContainer}>
      {/*{
        (numeroAnterior !== '0') &&
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      }*/}
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {numero}
      </Text>
      {/*fila de botones 1*/}
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" action={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" action={btnDelete} />
        <BotonCalc texto="/" color="#FF9427" action={btnDividir} />
      </View>
      {/*fila de botones 2*/}
      <View style={styles.fila}>
        <BotonCalc texto="7" action={armarNumero} />
        <BotonCalc texto="8" action={armarNumero} />
        <BotonCalc texto="9" action={armarNumero} />
        <BotonCalc texto="x" color="#FF9427" action={btnMultiplicar} />
      </View>
      {/*fila de botones 3*/}
      <View style={styles.fila}>
        <BotonCalc texto="4" action={armarNumero} />
        <BotonCalc texto="5" action={armarNumero} />
        <BotonCalc texto="6" action={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" action={btnRestar} />
      </View>
      {/*fila de botones 4*/}
      <View style={styles.fila}>
        <BotonCalc texto="1" action={armarNumero} />
        <BotonCalc texto="2" action={armarNumero} />
        <BotonCalc texto="3" action={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" action={btnSumar} />
      </View>
      {/*fila de botones 5*/}
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho action={armarNumero} />
        <BotonCalc texto="." action={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};
