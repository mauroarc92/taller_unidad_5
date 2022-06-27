import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import Restaurante from './pages/Restaurante';

import Cards from './components/Cards';
import FormImg from './components/FormImg';





test('prueba validar texto home', () => {
  render(<Restaurante />);
  const linkElement = screen.getByText(/menú/i);
  expect(linkElement).toBeInTheDocument();
});

test('prueba validar imagen menu',  () => {

  render(<Restaurante />);
  const linkElement = screen.getByTestId(/logo/i);
  expect(linkElement).toBeInTheDocument();
});

test('prueba comprobando producto menu',  () => {

  render(<Restaurante />);
  const linkElement = screen.getByAltText(/quarantine buddy/i);
  expect(linkElement).toBeInTheDocument();
});

test('prueba boton categorias',  () => {

  render(<Restaurante />);
 
  const input = screen.getByRole('button', {name: /desayuno/i});
  expect(input).toBeInTheDocument();
   
});

test('comprobar que el boton renderice',  () => {

  render(<Cards />);
 
  const linkElement =  screen.getByRole('button', {name: /buscar/i});
  expect(linkElement).toBeInTheDocument();
 
   
});


test('verificar que el boton este habilitado',  () => {

  render(<FormImg />);
  const primaryButton = screen.getByRole('button', { name: /buscar/i })
  expect(primaryButton).toBeEnabled()
});