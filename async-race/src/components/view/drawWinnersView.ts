import { ICar, IWinner } from "../types/interfaces";
import drawPrevNext from "./drawPrevNext";
import { store } from "../store";
import addListenerToPrevNext from "./addlistenerToPrevNext";

function drawWinnersView(winners: IWinner[], cars: ICar[]){
    const main = document.querySelector('.main');
    if (main){
    const divWinners = document.createElement('div');
    divWinners.classList.add('winners');
    const title = document.createElement('h1');
    title.textContent = `Winners(${store.totalCarsWinners})`;
    const subTitle = document.createElement('h2');
    subTitle.textContent = `Page #${store.pageWinners}`;
    const table = drawTamble(winners, cars);
    divWinners.append(title);
    divWinners.append(subTitle);
    divWinners.append(table);
    const divPrevNext = drawPrevNext();
    divWinners.append(divPrevNext);
    addListenerToPrevNext(divPrevNext, store.pageWinners, store.totalPageWinners);
    main.prepend(divWinners);
    divWinners.classList.add('hidden');
    }
}

function drawTamble (winners: IWinner[], cars: ICar[]) {
  const table = document.createElement('table');
    table.classList.add('table-winners');
    const tableHead = drawTableHead();
    table.append(tableHead); 
    const carsColors = cars.map((e) => e.color);
    const carsNames = cars.map((e) => e.name);
    for (let winner of winners){
      const index = winners.indexOf(winner);
      const row = document.createElement('tr');
      const tdNumber = document.createElement('td');
      tdNumber.textContent = `${winner.id}`;
      const tdCar = document.createElement('td');
      const svgCar = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './sprite.svg#car');
      svgCar.appendChild(useElem);
      svgCar.setAttributeNS(null, 'fill', `${carsColors[index]}`)
      svgCar.classList.add('car');
      tdCar.appendChild(svgCar);
      const tdName = document.createElement('td');
      tdName.textContent = `${carsNames[index]}`;
      const tdWins = document.createElement('td');
      tdWins.textContent = `${winner.wins}`;
      const tdTime = document.createElement('td');
      tdTime.textContent = `${winner.time}`;
      row.append(tdNumber);
      row.append(tdCar);
      row.append(tdName);
      row.append(tdWins);
      row.append(tdTime);
      table.append(row);
    }
    return table;
}

function drawTableHead() {
  const tableHead = document.createElement('tr');
  tableHead.classList.add('table-head');
  const headNames = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'];
  headNames.forEach((e) => {
    const th = document.createElement('th');
    if (e !== 'Best time (seconds)' ){
      th.setAttribute('id', e);
    } else {
      th.setAttribute('id', 'Time');
    };
    th.textContent = e;
    tableHead.appendChild(th);
  });
  return tableHead;
}

export default drawWinnersView;

