/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import createCar from '../requests/createCar';

const carBrands = [
  'Tesla',
  'Toyota',
  'Chevrolet',
  'Volga',
  'Zhiguli',
  'Seat',
  'Scoda',
  'Fiat',
  'Renault',
  'Mitsubishi',
];
const carModels = ['Doblo', 'Pasat', 'X5', 'Tourag', 'Fusion', 'Santana', 'XRay', 'LJ', 'RSS', 'Es'];

function generateCar() {
  const a = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  const c = Math.ceil(Math.random() * 255);
  const color = `#${a.toString(16)}${b.toString(16)}${c.toString(16)}`;
  const name = `${carBrands[Math.ceil(Math.random() * 9)]} ${carModels[Math.ceil(Math.random() * 9)]}`;
  createCar(name, color);
}

function generateCars() {
  for (let i = 0; i < 100; i += 1) {
    generateCar();
  }
}

export default generateCars;
