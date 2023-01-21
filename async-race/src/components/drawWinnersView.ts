import { IWinner } from "./types/interfaces";

function drawWinnersView(winners: IWinner[], pageNumber: number = 1){
    const main = document.querySelector('.main');
    if (main){
    const divWinners = document.createElement('div');
    divWinners.classList.add('winners');
    const title = document.createElement('h1');
    title.textContent = `Winners(${winners.length})`;
    const subTitle = document.createElement('h2');
    subTitle.textContent = `Page #${pageNumber}`;
    const table = document.createElement('table');
    table.classList.add('table-winners');
    const tableHead = document.createElement('tr');
    tableHead.classList.add('table-head');
    const headNames = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'];
    headNames.forEach((e) => {
        const td = document.createElement('td');
        td.setAttribute('id', e);
        td.textContent = e;
        tableHead.appendChild(td);
    });
    table.append(tableHead);

    divWinners.append(title);
    divWinners.append(subTitle);
    divWinners.append(table);
    main.append(divWinners);
    }
}

export default drawWinnersView;

/*<div class="winners">
        <h1 class="title main-block__title title_garage">Winnerrs(<span class="total-cars"></span>)</h1>
        <h2 class="subtitle main-block__subtitle subtitle_page">Page #<span class="page-number"></span></h2>
        <table class="table-winners">
            <tr class="table-head">
              <th>Number</th>
              <th>Car</th>
              <th>Name</th>
              <th>Wins</th>
              <th>Best time (seconds)</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>

    </div>-->*/
