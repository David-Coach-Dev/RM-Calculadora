import {useRef, useState} from 'react';
//enunciados
enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
  op,
}
enum est {
  uno,
  dos,
}
//useCalcyuladora
export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');
  const ultimaOperacion = useRef<Operadores>();
  const dobleSigno = useRef<est>();
  //limpiar textos
  const limpiar = () => {
    setNumeroAnterior('0');
    setNumero('0');
    ini();
  };
  //inicio de constante
  const ini = () => {
    ultimaOperacion.current = Operadores.op;
    dobleSigno.current = est.uno;
  };
  //borrar dígito
  const btnDelete = () => {
    let negativo = '';
    let numeroTemporal = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemporal = numero.substring(1);
    }
    if (numeroTemporal.length > 1) {
      setNumero(negativo + numeroTemporal.slice(0, -1));
    } else {
      setNumero('0');
    }
  };
  //Arma numero
  const armarNumero = (numeroTexto: string) => {
    //no aceptar doble.
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        //evaluar si es otro 0 si hay .
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        //evaluar si es diferente a 0 y no hay .
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
        ///000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };
  //Cambian signo
  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };
  //Cambia texto
  const cambiarNumAnt = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };
  //Dividir
  const btnDividir = () => {
    if (ultimaOperacion.current === Operadores.op) {
      ultimaOperacion.current = Operadores.dividir;
      cambiarNumAnt();
    } else {
      if (ultimaOperacion.current !== Operadores.dividir) {
        setNumero('0');
        ultimaOperacion.current = Operadores.dividir;
        return;
      }
      dobleSigno.current = est.dos;
      calcular();
    }
  };
  //Multiplicar
  const btnMultiplicar = () => {
    if (ultimaOperacion.current === Operadores.op) {
      ultimaOperacion.current = Operadores.multiplicar;
      cambiarNumAnt();
    } else {
      if (ultimaOperacion.current !== Operadores.multiplicar) {
        setNumero('0');
        ultimaOperacion.current = Operadores.multiplicar;
        return;
      }
      dobleSigno.current = est.dos;
      calcular();
    }
  };
  //Restar
  const btnRestar = () => {
    if (ultimaOperacion.current === Operadores.op) {
      ultimaOperacion.current = Operadores.restar;
      cambiarNumAnt();
    } else {
      if (ultimaOperacion.current !== Operadores.restar) {
        setNumero('0');
        ultimaOperacion.current = Operadores.restar;
        return;
      }
      dobleSigno.current = est.dos;
      calcular();
    }
  };
  //Sumar
  const btnSumar = () => {
    if (ultimaOperacion.current === Operadores.op) {
      ultimaOperacion.current = Operadores.sumar;
      cambiarNumAnt();
    } else {
      if (ultimaOperacion.current !== Operadores.sumar) {
        setNumero('0');
        ultimaOperacion.current = Operadores.sumar;
        return;
      }
      dobleSigno.current = est.dos;
      calcular();
    }
  };
  //igual
  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
    switch (ultimaOperacion.current) {
      case Operadores.sumar: {
        if (dobleSigno.current !== est.uno) {
          setNumeroAnterior(`${num1 + num2}`);
          dobleSigno.current = est.uno;
          setNumero('0');
        } else {
          setNumero(`${num1 + num2}`);
          setNumeroAnterior('0');
          ultimaOperacion.current = Operadores.op;
        }
        break;
      }
      case Operadores.restar: {
        if (dobleSigno.current !== est.uno) {
          setNumeroAnterior(`${num2 - num1}`);
          dobleSigno.current = est.uno;
          setNumero('0');
        } else {
          setNumero(`${num2 - num1}`);
          setNumeroAnterior('0');
          ultimaOperacion.current = Operadores.op;
        }
        break;
      }
      case Operadores.multiplicar: {
        if (dobleSigno.current !== est.uno) {
          setNumeroAnterior(`${num1 * num2}`);
          dobleSigno.current = est.uno;
          setNumero('0');
        } else {
          setNumero(`${num1 * num2}`);
          setNumeroAnterior('0');
          ultimaOperacion.current = Operadores.op;
        }
        break;
      }
      case Operadores.dividir: {
        if (num1 === 0) {
          break;
        } else {
          if (dobleSigno.current !== est.uno) {
            setNumeroAnterior(`${num2 / num1}`);
            dobleSigno.current = est.uno;
            setNumero('0');
          } else {
            setNumero(`${num2 / num1}`);
            setNumeroAnterior('0');
            ultimaOperacion.current = Operadores.op;
            break;
          }
        }
      }
    }
  };
  return {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    armarNumero,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
