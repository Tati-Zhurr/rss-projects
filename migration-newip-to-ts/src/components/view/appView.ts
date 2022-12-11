import { INews, IResponseArticles, IResponseSources, ISources } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: INews; 
    sources: ISources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IResponseArticles) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IResponseSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
