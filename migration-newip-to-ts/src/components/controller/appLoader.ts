import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: '1274e0bdac75415580bc714152baaefb', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
