import {StyleSheet} from 'react-native';
//Estilos
export const styles = StyleSheet.create({
  //Fondo
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  //Cuerpo
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  //Texto
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  //resultado
  resultadoPequeno: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  //fila
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  //boton
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: '600',
  },
});
