import drawButton from "./drawButton";
import { store } from "../store";
import getNextPage from "./getNextPage";
import getPrevPage from "./getPrevPage";
import { TypeFormatFlags } from "typescript";

function drawPrevNext (){
        const divPrevNext = document.createElement('div');
        divPrevNext.classList.add('buttons-wrapper');
        const buttonsOptions = ['prev', 'next'];
        const buttons = buttonsOptions.map((e) => drawButton(e));
        buttons.forEach((e) => {
            divPrevNext.append(e);
        });
        return divPrevNext; 
}

export default drawPrevNext;