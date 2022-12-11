import { IResponseArticles, IResponseSources } from '../../types/index';
import AppLoader from './appLoader';
export type Callback1 = <T extends IResponseArticles>(data?: T) => void | undefined;
export type Callback2 = <T extends IResponseSources>(data?: T) => void | undefined;

class AppController extends AppLoader {
    getSources(callback: Callback2) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback1) {
        if (e.target instanceof HTMLElement &&  e.currentTarget instanceof HTMLElement){
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId !== null){
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }             
            }
            
            target = <HTMLElement>target.parentNode;
           
        }

        } 
        
    }
}

export default AppController;
