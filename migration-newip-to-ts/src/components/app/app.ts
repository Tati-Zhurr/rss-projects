import { IAppController, IAppView} from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: IAppController;
    view: IAppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const blockSources = document.querySelector('.sources');
        const buttonTop = document.querySelector('.button_top10');
        if (buttonTop){
           buttonTop.addEventListener('click', (e)=> this.controller.getNews(e, (data) => this.view.drawNews(data)));
        }
        if (blockSources){
            blockSources.addEventListener('click', (e) => {
                 this.controller.getNews(e, (data) => this.view.drawNews(data));
                 if (buttonTop){
                 buttonTop.textContent = 'GET TOP 10';
                 }
            });
            this.controller.getSources((data) => this.view.drawSources(data));
        }  
    }
}

export default App;
