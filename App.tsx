/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculadoraScreen} from './src/screen/CalculadoraScreen';
import {styles} from './.history/src/theme/appTheme_20220423020812';
//App
export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor={'black'}
        barStyle="light-content"
      />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};
